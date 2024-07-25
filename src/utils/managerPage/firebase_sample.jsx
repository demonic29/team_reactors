/**
 * const docRef = doc(db, "general", "pageData");
 * const docSnap = await getDoc(docRef);
 * if (docSnap.exists()) {
 * setBanner(docSnap.data().about.banner);
 * setFilePreview(docSnap.data().about.banner.downloadURL);
 * setLoading(false);
 * } else {
 * toast.error("バナーを見つけられません");
 * setLoading(false);
 * }
 */
