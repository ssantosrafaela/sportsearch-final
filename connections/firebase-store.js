import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs, getDoc,
  deleteDoc,
  deleteUser,
} from "firebase/firestore";
import { auth } from "./firebase-auth";
import { app } from "./firebase-app";
import { getStorage } from 'firebase/storage'; 

const fbStorage = getStorage();

const db = getFirestore(app);

//FUNCAO PARA ADD USUARIO NO FIRESTORE
const addUserFirestore = async (
  userCredential,
  name,
  lastName,
  phone,
  city,
  state,
  genre,
  sexuality,
  pronome,
  email,
) => {
  const uid = auth.currentUser.uid;
  const data = {
    uid: uid,
    name: name,
    lastName: lastName,
    phone: phone,
    city: city,
    state: state,
    genre: genre,
    sexuality: sexuality,
    pronome: pronome,
    email: email,

  };
  return await setDoc(doc(db, "users", uid), data);
};

// FUNCAO PARA ADD EVENTO NO FIRESTORE
const addEventFirestore = async (
  nome,
  local,
  cidade,
  estado,
  horario,
  dataEvento,
  vagas,
//  atualPessoas,
  valor,
//  observacoes,
) => {
  const uid = auth.currentUser.uid;
  const data = {
    uid: uid,
    nome: nome,
    local: local,
    cidade: cidade,
    estado: estado,
    dataEvento: dataEvento,
    horario: horario,
    vagas: vagas,
   // atualPessoas: atualPessoas,
    valor: valor,
  //  observacoes: observacoes,
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
const deleteUserStore = async () => {
  const user = auth.currentUser;
  deleteUser(user).then(() => {
      console.log("Deletado");
  }).catch((error) => {
      console.warn(`Error: ${error}`);
  });
}

const addImgFirestore = async (url) => {
  const data = {
    url: url,
  };
  try {
    return await addDoc(collection(db, "images"), data);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; // re-throw the error so it can be handled upstream
  }
}

export { addUserFirestore, getProfileFromUid, addEventFirestore, getEventos, deleteUserStore, addImgFirestore};

// usuário oferecer esportes e poder participar de outros esportes oferecidos por outros usuários (ex: futebol, vôlei, basquete, etc).
// O usuário poderá oferecer um esporte e definir o local, data e horário que ele será realizado.
