export const isInCarrierLists = (byName, byHios) => (product) => {
  const carrierName = product.carrierName || product.carrier_name || "";
  const name = carrierName.split(" ");
  const matchName = name[0].toLowerCase();
  const hios = product.hiosIssuerId || product.hios_issuer_id;
  if (byName && byName.includes(matchName)) {
    return true;
  }
  if (byHios && byHios.includes(hios)) {
    return true;
  }
  return false;
};
