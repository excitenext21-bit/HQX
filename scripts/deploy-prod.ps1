$tree = (git rev-parse HEAD:dist).Trim()
$parent = (git rev-parse origin/production).Trim()
$commit = (git commit-tree $tree -p $parent -m "Production release: Strategic institutions 3-column vertical scroll and section reveals").Trim()
Write-Host "New production commit: $commit"
git update-ref refs/heads/production $commit
git push origin production
