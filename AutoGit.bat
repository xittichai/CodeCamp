set /p title="Please enter your title..."
set /p comment="Please enter your comment..."
git add .
git commit -m "%comment%" -m "%title%"
git push origin master