var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_express = __toModule(require("express"));
var path = __toModule(require("path"));
var os = __toModule(require("os"));
const app = (0, import_express.default)();
var Validrequest;
(function(Validrequest2) {
  Validrequest2["init"] = "init";
  Validrequest2["job"] = "job";
  Validrequest2["info"] = "info";
})(Validrequest || (Validrequest = {}));
const requestValues = Object.values(Validrequest);
app.get("/", (req, res) => {
  res.redirect("/dashboard");
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(os.homedir + "/PrintrFarmServer/html/dashboard.html"));
  console.log(req.ip, "conneted to Dashboard");
});
app.get("/nodes/:node/:req/:data", (req, res) => {
  let params = req.params;
  let node = req.params.node;
  let request = req.params.req;
  let data = req.params.data;
  if (requestValues.includes(request)) {
    if (request == "init") {
    }
    if (request == "jobs") {
    }
    if (request == "info") {
    }
  }
});
app.listen(() => {
  console.log("Server started");
});
//# sourceMappingURL=index.js.map
