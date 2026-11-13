// GitHub Pages의 HTTPS 주소에서 실행해야 합니다.
// Firebase CDN 버전은 공식 문서의 브라우저 모듈 예제를 기준으로 합니다.
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";

let app;
function getFirebaseApp() {
  if (!app) {
    const config = window.QUIZ_FIREBASE_CONFIG?.firebaseConfig;
    if (!config?.apiKey || config.apiKey.startsWith("YOUR_")) throw new Error("firebase-config.js의 설정이 비어 있습니다.");
    app = getApps().length ? getApp() : initializeApp(config);
  }
  return app;
}

export async function saveQuizResult(result) {
  const firebaseApp = getFirebaseApp();
  const auth = getAuth(firebaseApp);
  const credential = auth.currentUser ? { user: auth.currentUser } : await signInAnonymously(auth);
  const uid = credential.user.uid;
  const db = getFirestore(firebaseApp);
  // 신원정보/문항별 응답은 포함하지 않습니다.
  await addDoc(collection(db, "quizResults"), {
    ownerUid: uid,
    version: result.version,
    typeKey: result.typeKey,
    totals: result.totals,
    createdAt: serverTimestamp(),
  });
  return { saved: true };
}
