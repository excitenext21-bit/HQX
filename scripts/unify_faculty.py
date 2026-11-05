import os
import numpy as np
from PIL import Image, ImageFilter
import onnxruntime as ort

model_path = r'C:\Users\Mahi\.u2net\u2netp.onnx'
session = ort.InferenceSession(model_path)
input_name = session.get_inputs()[0].name
output_name = session.get_outputs()[0].name

def get_mask(im):
    orig_size = im.size
    img_rgb = im.convert('RGB')
    resized = img_rgb.resize((320, 320), Image.BILINEAR)
    arr = np.array(resized).astype(np.float32) / 255.0
    mean = np.array([0.485, 0.456, 0.406], dtype=np.float32)
    std = np.array([0.229, 0.224, 0.225], dtype=np.float32)
    arr = (arr - mean) / std
    arr = arr.transpose((2, 0, 1))[np.newaxis, ...].astype(np.float32)
    pred = session.run([output_name], {input_name: arr})[0]
    pred = pred[0, 0]
    pred = (pred - pred.min()) / (pred.max() - pred.min() + 1e-8)
    mask = Image.fromarray((pred * 255).astype(np.uint8)).resize(orig_size, Image.BILINEAR)
    return mask

def make_studio_bg(w=800, h=800):
    top_col = np.array([212, 213, 215], dtype=np.float32)
    bot_col = np.array([198, 199, 202], dtype=np.float32)
    y = np.linspace(0, 1, h, endpoint=True)[:, None, None]
    grad = (1 - y) * top_col + y * bot_col
    grad = np.tile(grad, (1, w, 1)).astype(np.uint8)
    return Image.fromarray(grad, 'RGB')

print('Script template ready')
