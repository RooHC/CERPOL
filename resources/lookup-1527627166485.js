(function(window, undefined) {
  var dictionary = {
    "9d0bf519-8021-4265-8a97-ce7e71b85aed": "Alertas",
    "89054b65-7d2f-48b8-8986-1af7f6440619": "Menu",
    "c74e7050-bed3-4a29-a288-fa71673bb653": "Video directo",
    "24ba8d79-48fe-4a98-862d-7668fa24f64b": "Inicio con ruta",
    "c00de8a1-4df5-4583-86f2-f3616c96ccd7": "Video archivo",
    "7031e79e-5e22-479c-82d2-582b955295cd": "Archivo",
    "9ba6a4ea-078a-426a-aad8-92ae16ea4705": "Inicio ficha",
    "917f9232-7ebf-4b42-a096-87fa0d02c80e": "Ficha Menú",
    "e2ad5a3f-ce89-45a0-b5c9-dce8de53b5a6": "Inicio",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Login",
    "0bdea0b6-0b3b-475b-9352-7b4008cb66e6": "Ficha",
    "88432a70-0a03-4c99-82d1-7d2aaf596ff8": "Mapa ficha",
    "98dc3d9d-140b-4b42-970f-4e1ad51c8ce7": "Buscador Gestion",
    "0779d75d-db1c-4d4d-8dd3-85791ac9358b": "Archivo selec video",
    "58f35ff6-9046-425b-8d6a-796387c5ea2f": "Buscador",
    "18c5bacd-6c56-41e5-8d51-39fc701232ca": "Editar ficha",
    "c095f335-2547-45c5-ba2f-89f4940d1348": "Buscador Alertas",
    "7dd83294-d6c6-4e8c-95c7-c70d2d0d958d": "Inicio refuerzos",
    "18f87441-f2b8-41dc-9304-54ad7e58c196": "Mapa",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);