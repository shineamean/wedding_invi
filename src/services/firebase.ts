import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  orderBy, 
  query, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { firebaseConfig } from '../firebase-config';

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export interface GuestbookEntry {
  id?: string;
  name: string;
  message: string;
  timestamp: Timestamp | Date;
}

// 방명록 항목 추가
export const addGuestbookEntry = async (name: string, message: string): Promise<boolean> => {
  try {
    await addDoc(collection(db, 'guestbook'), {
      name: name.trim(),
      message: message.trim(),
      timestamp: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('방명록 저장 실패:', error);
    return false;
  }
};

// 방명록 항목 조회
export const getGuestbookEntries = async (): Promise<GuestbookEntry[]> => {
  try {
    const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as GuestbookEntry));
  } catch (error) {
    console.error('방명록 로딩 실패:', error);
    return [];
  }
};
