import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs
} from "firebase/firestore";

import { app } from "./firebase-app";

const db = getFirestore(app);

//FUNCAO PARA ADD USUARIO NO FIRESTORE
const addUserFirestore = async (
  userCredential,
  email,
  name,
  lasName,
  phone,
  profile
) => {
  const uid = auth.currentUser.uid;
  const data = {
    uid: uid,
    name: name,
    lastName: lasName,
    phone: phone,
    profile: profile,
    email: email,
  };
  return await setDoc(doc(db, "users", uid), data);
};

// FUNCAO PARA ADD EVENTO NO FIRESTORE
const addEventFirestore = async (
  nomeEvento,
  localEvento,
  cidade,
  estado,
  horario,
  dataEvento,
  totalPessoas,
  atualPessoas,
  valor,
  observacoes
) => {
  const uid = auth.currentUser.uid;
  const data = {
    uid: uid,
    nomeEvento: nomeEvento,
    localEvento: localEvento,
    cidade: cidade,
    estado: estado,
    horario: horario,
    dataEvento: dataEvento,
    totalPessoas: totalPessoas,
    atualPessoas: atualPessoas,
    valor: valor,
    observacoes: observacoes,
  };
  return await addDoc(collection(db, "eventos"), data);
};

const getProfileFromUid = async (uia) => {
  const docRef = doc(db, "users", uia);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

const getEventos = async () =>{
  console.log("entrou no getEventos")
  const querySnapshot = await getDocs(collection(db, "eventos"));
  if (querySnapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  console.log(querySnapshot)
  listDocs = querySnapshot.docs.map((d) => d.data())
  return listDocs;  
}


export { addUserFirestore, getProfileFromUid, addEventFirestore, getEventos };

// usuário oferecer esportes e poder participar de outros esportes oferecidos por outros usuários (ex: futebol, vôlei, basquete, etc).
// O usuário poderá oferecer um esporte e definir o local, data e horário que ele será realizado.
