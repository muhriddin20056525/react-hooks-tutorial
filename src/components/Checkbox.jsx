import { useId } from "react";

function Checkbox() {
  // useId hookini o'zgaruvchiga tenglash
  const id = useId();

  return (
    <div>
      {/* input va labelda useId hookidan foydalanish */}
      <input type="checkbox" id={id} />
      <label htmlFor={id}>Accept Terms</label>

      <br />

      {/* Diqqat: 1 ta elon qilingan useId faqat 1 ta input va label uchun ishlaydi yani pastdagi input va lableni bir birga bog'lamaydi pastdagi label bosilsa checkbox active holatga keladi */}
      <input type="text" id={id} />
      <label htmlFor={id}>Enter Your Name</label>
    </div>
  );
}

export default Checkbox;
