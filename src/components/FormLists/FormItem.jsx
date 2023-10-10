import style from "./FormItem.module.css";

import code from "./../../assets/code.svg";
import pencil from "./../../assets/pencil.svg";
import trash from "./../../assets/trash.svg";

const FormItem = ({ form, idx }) => {
  const sourceCode = `<mag-form><div class="mag-form" data-token="${form.id}"></div></mag-form>`;
  return (
    <div className={style.grid}>
      <span className={style.number}>{idx}</span>
      <span className={style.number}>{form.name}</span>
      <span className={style.code}>{sourceCode}</span>
      <div className={style.action}>
        <button>
          <img src={code} alt='' />
        </button>
      </div>
      <div className={style.action}>
        <button>
          <img src={pencil} alt='' />
        </button>
        <button>
          <img src={trash} alt='' />
        </button>
      </div>
    </div>
  );
};

export default FormItem;
