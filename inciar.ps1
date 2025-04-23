code app
code backend
wt --window 0 -p "Windows Powershell" -d "$pwd" powershell -noExit "cd backend`nnpm start"
cd app
start-process "chrome.exe" "http://localhost:5173/",'--profile-directory="Default"'
npm run dev
