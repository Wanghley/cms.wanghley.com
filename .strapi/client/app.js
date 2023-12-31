/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor from "@ckeditor/strapi-plugin-ckeditor/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import locationField from "strapi-location-field-plugin/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import multiSelect from "strapi-plugin-multi-select/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.js";

renderAdmin(document.getElementById("strapi"), {
  customisations,
  plugins: {
    ckeditor: ckeditor,
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "location-field": locationField,
    "import-export-entries": importExportEntries,
    "multi-select": multiSelect,
  },
});
