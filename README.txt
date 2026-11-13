OUR CLASS PERSONALITY EXPLORER - VERSION 1
==========================================

[Windows: How to run]
1. Right-click the downloaded ZIP file.
2. Click "Extract All" (Korean Windows: "모두 압축 풀기").
3. Open the extracted folder "my_personality_v1".
4. Double-click "index.html" to open it in Chrome or Edge.
5. Fill in grade, class, student number, and name. Answer all 20 statements.
6. See your 4 personality-style scores and a suggested complementary style.

[Files]
index.html      : screen structure
style.css       : colors, sizes, mobile layout
script.js       : 20 questions, score calculation, result messages
assets/*.svg    : original illustrated animal character graphics
README.txt      : this guide

[Edit a question]
Right-click script.js -> Open with Notepad.
Find const questions = [ at the top. Edit the "text" of a question.
Do not change "type" unless you also rebalance the questions: 5 per type.
Save (Ctrl+S), refresh your browser (F5).

[GitHub Pages]
Create a public GitHub repository. Upload index.html, style.css, script.js,
and the assets folder to the repository's root (not nested inside another folder).
Go to Settings -> Pages -> Build and deployment -> Deploy from a branch,
choose main and /(root), then Save.

[Privacy]
Version 1 uses only browser RAM. No server, localStorage, cookies, analytics,
or Firebase. Data disappears on reload/close, but it can remain visible on
screen or printouts until then. Be careful on shared school computers.
Don't publish students' full names, numbers, or screenshots publicly.
Before Firebase integration, decide consent, retention, access rules,
minimum data, teacher-only authentication, and Firestore security rules.

[Interpretation]
This is a classroom self-reflection activity, not a validated psychological
assessment or a criterion for sorting students / deciding friendships.
Complementary styles are examples, not fixed compatibility judgments.
