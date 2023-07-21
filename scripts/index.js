import {table, modal} from './elementsDOMmodule.js';
import {formControl} from "./createGoodsModule.js";
import {renderGoods} from "./renderGoodsModule.js";
import {closeFormModal, modalControl} from "./modalControlModule.js";
import {getStorage} from './storageModule.js'

{
  const init = () => {
    const data = getStorage('key');



    closeFormModal();
    formControl(modal, table);
    renderGoods(data);
    modalControl();
  }

  window.CRM = init;
}






