export const useModel = (model: any) => {
  return (e: any) => {
    if (e) {
      e?.addEventListener("keyup", () => {
        model.value = e?.value || "";
      });
    }
  };
};
