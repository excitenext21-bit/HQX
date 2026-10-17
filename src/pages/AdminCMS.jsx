import React, { useState } from 'react';
import BrandLogo from '../components/common/BrandLogo';
import { 
  ShieldCheck, 
  Users, 
  Globe, 
  BookOpen, 
  Radio, 
  FileText, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  RotateCcw, 
  Save, 
  Sliders, 
  Mail, 
  ExternalLink,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { useData } from '../context/DataContext';

export default function AdminCMS() {
  const { 
    faculty, addFaculty, updateFaculty, deleteFaculty,
    courses, addCourse, updateCourse, deleteCourse,
    books, addBook, updateBook, deleteBook,
    podcasts, addPodcast, updatePodcast, deletePodcast,
    engagements, addEngagement, updateEngagement, deleteEngagement,
    inquiries, updateInquiryStatus,
    cmsRichText, updateCmsRichText,
    resetToDefaults
  } = useData();

  const [activeTab, setActiveTab] = useState('team'); // 'team' | 'engagements' | 'courses' | 'podcasts' | 'books' | 'editor' | 'inquiries'

  // New Faculty Modal / Form State
  const [showFacultyModal, setShowFacultyModal] = useState(false);
  const [newFaculty, setNewFaculty] = useState({
    name: '',
    category: 'Personal Leadership',
    title: '',
    bio: '',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    active: true
  });

  // New Engagement Form State
  const [showEngagementModal, setShowEngagementModal] = useState(false);
  const [newEngagement, setNewEngagement] = useState({
    client: '',
    location: '',
    scope: 'Domestic',
    category: 'Leadership Deep Dive',
    date: '2026',
    attendees: '100+ Executives',
    impact: 'Increased team engagement and well-being score'
  });

  // New Course Form State
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    duration: '100 Days',
    price: '₹4,999',
    description: '',
    icon: 'sparkles',
    modules: 12,
    enrolledCount: 0,
    active: true
  });

  // New Podcast Form State
  const [showPodcastModal, setShowPodcastModal] = useState(false);
  const [newPodcast, setNewPodcast] = useState({
    title: '',
    guest: '',
    publication: 'HQX Podcast',
    date: 'November 2026',
    format: 'Video & Audio',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '45 mins',
    summary: ''
  });

  // New Book Form State
  const [showBookModal, setShowBookModal] = useState(false);
  const [newBook, setNewBook] = useState({
    year: '2026',
    title: '',
    subtitle: '',
    description: '',
    purchaseUrl: 'https://amazon.com',
    quote: '',
    endorser: ''
  });

  // Rich-Text Editor State
  const [editorText, setEditorText] = useState(cmsRichText);
  const [editorSaved, setEditorSaved] = useState(false);

  const handleSaveRichText = (e) => {
    e.preventDefault();
    updateCmsRichText(editorText);
    setEditorSaved(true);
    setTimeout(() => setEditorSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-hq-gray text-hq-black">
      {/* Top CMS Header */}
      <div className="bg-hq-black text-hq-white pt-24 pb-8 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <BrandLogo iconOnly={true} className="w-10 h-10 rounded-xl overflow-hidden shrink-0 shadow-md" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-2xl tracking-wider font-semibold">
                  HQX React Admin CMS
                </h1>
                <span className="bg-hq-yellow text-hq-black text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                  v2.0 Live State
                </span>
              </div>
              <p className="text-xs font-mono text-hq-white/60">
                Happiness Quotient Global Pvt Ltd • Headless Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Reset all CMS data back to the proposal initial demo state?')) {
                  resetToDefaults();
                  alert('Reset successfully!');
                }
              }}
              className="text-xs font-mono text-white/70 hover:text-white flex items-center gap-1.5 px-3 py-2 border border-white/20 rounded-lg hover:border-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Demo Data</span>
            </button>
            <a 
              href="/" 
              target="_blank"
              rel="noreferrer"
              className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-white transition-colors flex items-center gap-1.5"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* CMS Navigation Tabs */}
      <div className="bg-white border-b border-hq-black/10 px-6 md:px-12 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex gap-2 py-3 min-w-max text-xs font-display uppercase tracking-wider font-semibold">
          {[
            { id: 'team', label: 'Team Directory', count: faculty.length, icon: Users },
            { id: 'engagements', label: 'Corporate Engagements', count: engagements.length, icon: Globe },
            { id: 'courses', label: '100-Day Micro Courses', count: courses.length, icon: BookOpen },
            { id: 'podcasts', label: 'Podcast & Press', count: podcasts.length, icon: Radio },
            { id: 'books', label: 'Literature Library', count: books.length, icon: FileText },
            { id: 'editor', label: 'Rich-Text & Styling Studio', count: null, icon: Sliders },
            { id: 'inquiries', label: 'Inquiries Inbox', count: inquiries.length, icon: Mail }
          ].map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                  active 
                    ? 'bg-hq-black text-hq-yellow shadow-md' 
                    : 'text-hq-black/70 hover:bg-hq-gray hover:text-hq-black'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    active ? 'bg-hq-yellow text-hq-black font-bold' : 'bg-hq-black/10 text-hq-black'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main CMS Tab View */}
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-12">
        {/* PANEL 1: TEAM DIRECTORY */}
        {activeTab === 'team' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold">Faculty & Team Directory</h2>
                <p className="text-xs font-body text-hq-black/60">
                  Manage mentors, expertise categories, bios, and active status in the faculty grid.
                </p>
              </div>
              <button
                onClick={() => setShowFacultyModal(true)}
                className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center gap-1.5 font-semibold"
              >
                <Plus className="w-4 h-4" />
                <span>Add Faculty Member</span>
              </button>
            </div>

            <div className="bg-white border border-hq-black/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-body">
                  <thead className="bg-hq-gray border-b border-hq-black/10 text-[10px] font-mono uppercase text-hq-black/60">
                    <tr>
                      <th className="p-4">Faculty Member</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Title / Role</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hq-black/10">
                    {faculty.map((member) => (
                      <tr key={member.id} className="hover:bg-hq-gray/40">
                        <td className="p-4 flex items-center gap-3">
                          <img src={member.image} alt={member.name} className="w-10 h-10 rounded-lg object-cover border" />
                          <div>
                            <div className="font-display font-semibold text-sm">{member.name}</div>
                            <div className="text-[10px] text-hq-black/50 line-clamp-1">{member.bio}</div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="bg-hq-gray border px-2 py-1 rounded text-[10px] font-mono font-semibold">
                            {member.category}
                          </span>
                        </td>
                        <td className="p-4 text-hq-black/80">{member.title}</td>
                        <td className="p-4">
                          <button
                            onClick={() => updateFaculty(member.id, { active: !member.active })}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold ${
                              member.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {member.active ? 'Active' : 'Hidden'}
                          </button>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete ${member.name} from faculty?`)) {
                                deleteFaculty(member.id);
                              }
                            }}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal for adding faculty */}
            {showFacultyModal && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full p-6 rounded-2xl shadow-2xl">
                  <h3 className="font-display text-xl font-semibold mb-4">Add Faculty Member</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    addFaculty(newFaculty);
                    setShowFacultyModal(false);
                    setNewFaculty({
                      name: '',
                      category: 'Personal Leadership',
                      title: '',
                      bio: '',
                      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
                      active: true
                    });
                  }} className="space-y-3 text-xs font-body">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={newFaculty.name} 
                        onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })} 
                        className="w-full border p-2.5 rounded focus:border-hq-black outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Expertise Category *</label>
                      <select 
                        value={newFaculty.category} 
                        onChange={(e) => setNewFaculty({ ...newFaculty, category: e.target.value })}
                        className="w-full border p-2.5 rounded focus:border-hq-black outline-none"
                      >
                        <option value="Personal Leadership">Personal Leadership</option>
                        <option value="Spirituality">Spirituality</option>
                        <option value="Parenting">Parenting</option>
                        <option value="Sports">Sports</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Title & Credentials *</label>
                      <input 
                        type="text" 
                        required 
                        value={newFaculty.title} 
                        onChange={(e) => setNewFaculty({ ...newFaculty, title: e.target.value })} 
                        placeholder="e.g. Cognitive Neuroscientist & Olympic Coach"
                        className="w-full border p-2.5 rounded focus:border-hq-black outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Biography *</label>
                      <textarea 
                        rows={3} 
                        required 
                        value={newFaculty.bio} 
                        onChange={(e) => setNewFaculty({ ...newFaculty, bio: e.target.value })} 
                        className="w-full border p-2.5 rounded focus:border-hq-black outline-none"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Headshot Image URL</label>
                      <input 
                        type="url" 
                        value={newFaculty.image} 
                        onChange={(e) => setNewFaculty({ ...newFaculty, image: e.target.value })} 
                        className="w-full border p-2.5 rounded focus:border-hq-black outline-none" 
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                      <button 
                        type="button" 
                        onClick={() => setShowFacultyModal(false)}
                        className="px-4 py-2 border rounded text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="bg-hq-yellow text-hq-black font-display font-semibold uppercase tracking-wider text-xs px-5 py-2 rounded"
                      >
                        Save Faculty
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PANEL 2: CORPORATE ENGAGEMENTS */}
        {activeTab === 'engagements' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold">Corporate Engagements & Interventions</h2>
                <p className="text-xs font-body text-hq-black/60">
                  Update domestic and global client delivery records, attendee counts, and verified impact.
                </p>
              </div>
              <button
                onClick={() => setShowEngagementModal(true)}
                className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center gap-1.5 font-semibold"
              >
                <Plus className="w-4 h-4" />
                <span>Add Engagement</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engagements.map((eng) => (
                <div key={eng.id} className="bg-white p-6 rounded-2xl border border-hq-black/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                        eng.scope === 'Global' ? 'bg-hq-black text-hq-yellow' : 'bg-hq-yellow text-hq-black'
                      }`}>
                        {eng.scope}
                      </span>
                      <span className="text-xs font-mono text-hq-black/50">{eng.date}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-1">{eng.client}</h3>
                    <div className="text-xs text-hq-black/60 mb-2 font-mono">{eng.location}</div>
                    <div className="text-xs font-semibold text-hq-black mb-3">{eng.category}</div>
                    <p className="text-xs font-body text-hq-black/75 font-light italic mb-4">
                      "{eng.impact}"
                    </p>
                  </div>
                  <div className="pt-3 border-t flex justify-between items-center text-xs">
                    <span className="font-mono text-hq-black/50">{eng.attendees}</span>
                    <button
                      onClick={() => deleteEngagement(eng.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for adding engagement */}
            {showEngagementModal && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full p-6 rounded-2xl shadow-2xl">
                  <h3 className="font-display text-xl font-semibold mb-4">Add Corporate Engagement</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    addEngagement(newEngagement);
                    setShowEngagementModal(false);
                  }} className="space-y-3 text-xs font-body">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Client Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={newEngagement.client}
                        onChange={(e) => setNewEngagement({ ...newEngagement, client: e.target.value })}
                        placeholder="e.g. Reliance Industries / Google"
                        className="w-full border p-2.5 rounded"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Scope</label>
                        <select
                          value={newEngagement.scope}
                          onChange={(e) => setNewEngagement({ ...newEngagement, scope: e.target.value })}
                          className="w-full border p-2.5 rounded"
                        >
                          <option value="Domestic">Domestic</option>
                          <option value="Global">Global</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Date / Year</label>
                        <input 
                          type="text" 
                          value={newEngagement.date}
                          onChange={(e) => setNewEngagement({ ...newEngagement, date: e.target.value })}
                          className="w-full border p-2.5 rounded"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Location *</label>
                      <input 
                        type="text" 
                        required 
                        value={newEngagement.location}
                        onChange={(e) => setNewEngagement({ ...newEngagement, location: e.target.value })}
                        placeholder="e.g. Mumbai, India or London, UK"
                        className="w-full border p-2.5 rounded"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Category</label>
                      <input 
                        type="text" 
                        value={newEngagement.category}
                        onChange={(e) => setNewEngagement({ ...newEngagement, category: e.target.value })}
                        placeholder="e.g. Leadership Deep Dive"
                        className="w-full border p-2.5 rounded"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Verified Impact / Quote</label>
                      <textarea 
                        rows={2} 
                        value={newEngagement.impact}
                        onChange={(e) => setNewEngagement({ ...newEngagement, impact: e.target.value })}
                        className="w-full border p-2.5 rounded"
                      ></textarea>
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                      <button type="button" onClick={() => setShowEngagementModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                      <button type="submit" className="bg-hq-yellow text-hq-black font-bold uppercase px-5 py-2 rounded">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PANEL 3: MICRO COURSES */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold">100-Day Micro Courses Manager</h2>
                <p className="text-xs font-body text-hq-black/60">
                  Manage availability, syllabus modules, enrollment URL, and pricing.
                </p>
              </div>
              <button
                onClick={() => setShowCourseModal(true)}
                className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center gap-1.5 font-semibold"
              >
                <Plus className="w-4 h-4" />
                <span>Add Micro Course</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white p-6 rounded-2xl border border-hq-black/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-display text-xl font-bold">{course.title}</span>
                      <span className="text-sm font-mono font-bold bg-hq-yellow px-2 py-0.5 rounded">{course.price}</span>
                    </div>
                    <div className="text-xs font-mono text-hq-black/60 mb-3">
                      {course.duration} • {course.modules} Modules • {course.enrolledCount} enrolled
                    </div>
                    <p className="text-xs font-body text-hq-black/75 mb-4 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t flex justify-between items-center">
                    <span className="text-xs font-mono text-green-700 font-semibold">Live in Catalog</span>
                    <button onClick={() => deleteCourse(course.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for adding course */}
            {showCourseModal && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full p-6 rounded-2xl shadow-2xl">
                  <h3 className="font-display text-xl font-semibold mb-4">Add 100-Day Course</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    addCourse(newCourse);
                    setShowCourseModal(false);
                  }} className="space-y-3 text-xs font-body">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Course Title *</label>
                      <input 
                        type="text" 
                        required 
                        value={newCourse.title}
                        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                        placeholder="e.g. The Longevity Code"
                        className="w-full border p-2.5 rounded"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Price *</label>
                        <input 
                          type="text" 
                          required 
                          value={newCourse.price}
                          onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                          className="w-full border p-2.5 rounded"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Duration</label>
                        <input 
                          type="text" 
                          value={newCourse.duration}
                          onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                          className="w-full border p-2.5 rounded"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Course Description *</label>
                      <textarea 
                        rows={3} 
                        required 
                        value={newCourse.description}
                        onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                        className="w-full border p-2.5 rounded"
                      ></textarea>
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                      <button type="button" onClick={() => setShowCourseModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                      <button type="submit" className="bg-hq-yellow text-hq-black font-bold uppercase px-5 py-2 rounded">Save Course</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PANEL 4: PODCAST & PRESS */}
        {activeTab === 'podcasts' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold">HQX Podcast & Press Releases</h2>
                <p className="text-xs font-body text-hq-black/60">
                  Add new episode releases, guest details, and YouTube video IDs.
                </p>
              </div>
              <button
                onClick={() => setShowPodcastModal(true)}
                className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center gap-1.5 font-semibold"
              >
                <Plus className="w-4 h-4" />
                <span>Add Podcast Episode</span>
              </button>
            </div>

            <div className="space-y-4">
              {podcasts.map((pod) => (
                <div key={pod.id} className="bg-white p-6 rounded-2xl border border-hq-black/10 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="max-w-xl">
                    <div className="text-[10px] font-mono text-hq-black/50 uppercase mb-1">
                      {pod.publication} • {pod.date} • {pod.duration}
                    </div>
                    <h3 className="font-display text-lg font-bold mb-1">{pod.title}</h3>
                    <div className="text-xs font-mono text-hq-yellow bg-hq-black px-2 py-0.5 rounded inline-block mb-2">
                      Guest: {pod.guest}
                    </div>
                    <p className="text-xs font-body text-hq-black/70 leading-relaxed line-clamp-2">
                      {pod.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] font-mono bg-hq-gray border px-2.5 py-1 rounded">
                      YouTube: {pod.youtubeId}
                    </span>
                    <button onClick={() => deletePodcast(pod.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for adding podcast */}
            {showPodcastModal && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full p-6 rounded-2xl shadow-2xl">
                  <h3 className="font-display text-xl font-semibold mb-4">Add Podcast Episode</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    addPodcast(newPodcast);
                    setShowPodcastModal(false);
                  }} className="space-y-3 text-xs font-body">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Episode Title *</label>
                      <input 
                        type="text" 
                        required 
                        value={newPodcast.title}
                        onChange={(e) => setNewPodcast({ ...newPodcast, title: e.target.value })}
                        className="w-full border p-2.5 rounded"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Guest Name *</label>
                        <input 
                          type="text" 
                          required 
                          value={newPodcast.guest}
                          onChange={(e) => setNewPodcast({ ...newPodcast, guest: e.target.value })}
                          className="w-full border p-2.5 rounded"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">YouTube Video ID *</label>
                        <input 
                          type="text" 
                          required 
                          value={newPodcast.youtubeId}
                          onChange={(e) => setNewPodcast({ ...newPodcast, youtubeId: e.target.value })}
                          placeholder="e.g. dQw4w9WgXcQ"
                          className="w-full border p-2.5 rounded font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Summary / Key Takeaway</label>
                      <textarea 
                        rows={3} 
                        value={newPodcast.summary}
                        onChange={(e) => setNewPodcast({ ...newPodcast, summary: e.target.value })}
                        className="w-full border p-2.5 rounded"
                      ></textarea>
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                      <button type="button" onClick={() => setShowPodcastModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                      <button type="submit" className="bg-hq-yellow text-hq-black font-bold uppercase px-5 py-2 rounded">Save Episode</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PANEL 5: LITERATURE LIBRARY (BOOKS) */}
        {activeTab === 'books' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold">Literature & Book Roadmap (2020 - 2025)</h2>
                <p className="text-xs font-body text-hq-black/60">
                  Maintain the chronological authorship roadmap, endorsements, and purchase URLs.
                </p>
              </div>
              <button
                onClick={() => setShowBookModal(true)}
                className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center gap-1.5 font-semibold"
              >
                <Plus className="w-4 h-4" />
                <span>Add Book Release</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((b) => (
                <div key={b.id} className="bg-white p-6 rounded-2xl border border-hq-black/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-display text-2xl font-bold">{b.year}</span>
                      {b.endorser && (
                        <span className="text-[10px] font-mono bg-hq-yellow px-2 py-0.5 rounded font-bold">
                          Endorsed by {b.endorser}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-1">{b.title}</h3>
                    <div className="font-serif italic text-xs text-hq-black/60 mb-3">{b.subtitle}</div>
                    <p className="text-xs font-body text-hq-black/75 mb-4 line-clamp-3">
                      {b.description}
                    </p>
                    <div className="p-3 bg-hq-gray rounded-lg text-xs italic mb-4">
                      "{b.quote}"
                    </div>
                  </div>
                  <div className="pt-3 border-t flex justify-between items-center text-xs">
                    <a href={b.purchaseUrl} target="_blank" rel="noreferrer" className="text-hq-black font-semibold hover:underline flex items-center gap-1">
                      <span>Amazon URL</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button onClick={() => deleteBook(b.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for adding book */}
            {showBookModal && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full p-6 rounded-2xl shadow-2xl">
                  <h3 className="font-display text-xl font-semibold mb-4">Add Literature Release</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    addBook(newBook);
                    setShowBookModal(false);
                  }} className="space-y-3 text-xs font-body">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Publication Year *</label>
                        <input 
                          type="text" 
                          required 
                          value={newBook.year}
                          onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                          className="w-full border p-2.5 rounded"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Book Title *</label>
                        <input 
                          type="text" 
                          required 
                          value={newBook.title}
                          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                          className="w-full border p-2.5 rounded"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Subtitle</label>
                      <input 
                        type="text" 
                        value={newBook.subtitle}
                        onChange={(e) => setNewBook({ ...newBook, subtitle: e.target.value })}
                        className="w-full border p-2.5 rounded"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Book Synopsis</label>
                      <textarea 
                        rows={2} 
                        value={newBook.description}
                        onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                        className="w-full border p-2.5 rounded"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Prominent Endorsement / Quote</label>
                      <input 
                        type="text" 
                        value={newBook.quote}
                        onChange={(e) => setNewBook({ ...newBook, quote: e.target.value })}
                        placeholder="e.g. Defining Book of The Moment"
                        className="w-full border p-2.5 rounded"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">Endorser Name</label>
                      <input 
                        type="text" 
                        value={newBook.endorser}
                        onChange={(e) => setNewBook({ ...newBook, endorser: e.target.value })}
                        placeholder="e.g. John Abraham"
                        className="w-full border p-2.5 rounded"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                      <button type="button" onClick={() => setShowBookModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                      <button type="submit" className="bg-hq-yellow text-hq-black font-bold uppercase px-5 py-2 rounded">Save Book</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PANEL 6: RICH-TEXT EDITOR & STYLING STUDIO */}
        {activeTab === 'editor' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-semibold">Rich-Text & Content Styling Studio</h2>
              <p className="text-xs font-body text-hq-black/60">
                As required in Section 1 & 2 of Proposal: precise controls for headlines, subtext, font styling, and homepage brand copy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-hq-black/10 shadow-sm">
              {editorSaved && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Changes updated and synced to live website successfully!</span>
                </div>
              )}

              <form onSubmit={handleSaveRichText} className="space-y-6 text-xs font-body">
                {/* Styling Bar Controls */}
                <div className="p-4 bg-hq-gray rounded-xl border border-hq-black/10 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase text-hq-black/60">Font Weight:</span>
                    <select
                      value={editorText.fontWeight}
                      onChange={(e) => setEditorText({ ...editorText, fontWeight: e.target.value })}
                      className="border p-1.5 rounded bg-white text-xs font-semibold"
                    >
                      <option value="font-light">Light</option>
                      <option value="font-normal">Normal</option>
                      <option value="font-semibold">Semibold</option>
                      <option value="font-bold">Bold</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase text-hq-black/60">Body Font Size:</span>
                    <select
                      value={editorText.fontSize}
                      onChange={(e) => setEditorText({ ...editorText, fontSize: e.target.value })}
                      className="border p-1.5 rounded bg-white text-xs font-semibold"
                    >
                      <option value="text-sm">Compact (14px)</option>
                      <option value="text-base">Standard (16px)</option>
                      <option value="text-lg">Expansive (18px)</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase text-hq-black/60">Primary Brand Accent:</span>
                    <div className="flex items-center gap-1.5 bg-white border p-1 rounded">
                      <div className="w-5 h-5 rounded bg-hq-yellow border"></div>
                      <span className="font-mono text-[11px]">#FFCC00 (HQ Yellow)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">
                      Hero Banner Tagline
                    </label>
                    <input 
                      type="text" 
                      value={editorText.bannerTagline}
                      onChange={(e) => setEditorText({ ...editorText, bannerTagline: e.target.value })}
                      className="w-full border p-3 rounded font-serif italic text-sm focus:border-hq-black outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">
                      Hero Subtitle / Value Proposition
                    </label>
                    <textarea 
                      rows={3}
                      value={editorText.heroSubtext}
                      onChange={(e) => setEditorText({ ...editorText, heroSubtext: e.target.value })}
                      className="w-full border p-3 rounded text-sm focus:border-hq-black outline-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-hq-black/60 mb-1">
                      "Feel Better Work Better" Philosophy Copy
                    </label>
                    <textarea 
                      rows={3}
                      value={editorText.quoteSubtext}
                      onChange={(e) => setEditorText({ ...editorText, quoteSubtext: e.target.value })}
                      className="w-full border p-3 rounded text-sm focus:border-hq-black outline-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4 border-t flex justify-end">
                  <button
                    type="submit"
                    className="bg-hq-yellow text-hq-black font-display font-semibold uppercase tracking-wider text-xs px-8 py-3.5 rounded-full hover:bg-hq-black hover:text-white transition-all shadow-md flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save & Deploy Live Changes</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* PANEL 7: INQUIRIES INBOX */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-semibold">Corporate Inquiries Inbox</h2>
              <p className="text-xs font-body text-hq-black/60">
                Incoming leads captured from homepage, program pages, and footer forms.
              </p>
            </div>

            <div className="bg-white border border-hq-black/10 rounded-2xl overflow-hidden shadow-sm">
              {inquiries.length === 0 ? (
                <div className="p-8 text-center text-xs text-hq-black/50">No inquiries logged yet.</div>
              ) : (
                <div className="divide-y divide-hq-black/10">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-6 hover:bg-hq-gray/40 transition-colors">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-display font-bold text-base">{inq.name}</span>
                          <span className="bg-hq-black text-hq-yellow text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                            {inq.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-hq-black/50">{inq.date}</span>
                          <select
                            value={inq.status}
                            onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                            className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border ${
                              inq.status === 'Confirmed' ? 'bg-green-100 text-green-800 border-green-300' :
                              inq.status === 'Contacted' ? 'bg-blue-100 text-blue-800 border-blue-300' :
                              'bg-yellow-100 text-yellow-800 border-yellow-300'
                            }`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Confirmed">Confirmed</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-hq-black/70 mb-3">
                        <div>Email: <a href={`mailto:${inq.email}`} className="text-hq-black font-semibold hover:underline">{inq.email}</a></div>
                        <div>Phone: <a href={`tel:${inq.phone}`} className="text-hq-black font-semibold hover:underline">{inq.phone}</a></div>
                        <div>Target Program: <span className="font-semibold text-hq-black">{inq.program}</span></div>
                      </div>

                      {inq.message && (
                        <div className="p-3 bg-hq-gray rounded-xl text-xs font-body text-hq-black/80">
                          "{inq.message}"
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
