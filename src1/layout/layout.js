import { useState, useEffect } from "react";
// @mui
import { Backdrop, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
// components
import { firestore, storeactions } from "../firebase/firebase";
import Navbar from "../components/navbar/navbar";
import LiveSection from "@/components";
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE,
}));

// ----------------------------------------------------------------------

export default function LiveLayout() {
  const [mainObj, setMainObj] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const platformname = process.env.PLATFORM_NAME;
  const brandname = process.env.BRAND_NAME;

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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Navbar mainObj={mainObj} />

      <Main>
        <LiveSection mainObj={mainObj} />
      </Main>
    </>
  );
}
