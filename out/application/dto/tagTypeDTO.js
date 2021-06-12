"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagTypeDTO = void 0;
var TagTypeDTO = /** @class */ (function () {
    function TagTypeDTO(id, description, visible, list, listvalues, active) {
        this.id = id;
        this.description = description;
        this.visible = visible;
        this.list = list == null ? false : list;
        this.listvalues = listvalues == null ? "" : listvalues;
        this.active = active;
    }
    return TagTypeDTO;
}());
exports.TagTypeDTO = TagTypeDTO;
//# sourceMappingURL=tagTypeDTO.js.map