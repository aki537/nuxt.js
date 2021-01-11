import firebase from 'firebase'

// firebaseの初期化に必要なパラメータをオブジェクト形式で用意する
const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

// 二重に初期化が行われないようにするif
if(!firebase.apps.length) {
  firebase.initializeApp(config)
}

// 他の場所で使えるようexportする
export default firebase