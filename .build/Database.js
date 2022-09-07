var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  AddClient: () => AddClient
});
const nodes = [];
function AddClient(data) {
  let dataparse = JSON.parse(data);
  const Entry = { "id": `${dataparse.id}`, "name": `${dataparse.name}` };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddClient
});
//# sourceMappingURL=Database.js.map
