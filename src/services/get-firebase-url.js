const filebaseConfig = {
  apiKey: "AIzaSyAMmrAR0OVBXw5h0yS769RQUEsqEwHFB4c",
  authDomain: "primex-7093b.firebaseapp.com",
  projectId: "primex-7093b",
}; 

export default () => {
  return `https://firestore.googleapis.com/v1/projects/${filebaseConfig.projectId}/databases/(default)/documents`
};