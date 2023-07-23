import { useState, useEffect } from "react";
import { firestore, storeactions } from "../firebase/firebase";
import LiveLayout from "@/layout/layout";

export default function Home() {
  const [mainObj, setMainObj] = useState({});

  const [showLoader, setShowLoader] = useState(false);

  const platformname = "Facebook";
  const brandname = "WhatsApp";

  const handleGetMainObj = async () => {
    try {
      setShowLoader(true);
      const { doc, getDoc, collection } = storeactions;

      const docRef = doc(collection(firestore, "platforms"), platformname);
      const existingDoc = await getDoc(docRef);

      if (existingDoc.exists()) {
        const documentData = existingDoc.data();
        const { activeversion } = documentData[brandname];
        const { template } = documentData[brandname][activeversion];
        setMainObj(template);
      }

      setShowLoader(false);
    } catch (err) {
      console.log(err);
      setShowLoader(false);
    }
  };

  useEffect(() => {
    handleGetMainObj();
  }, []);

  return (
    <>
      <LiveLayout />
    </>
  );
}
