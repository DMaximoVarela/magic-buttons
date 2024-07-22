interface content {
  modal: boolean;
  setModal: (modal: boolean) => void;
  cssCode: string;
}

const Modal: React.FC<content> = ({ modal, setModal, cssCode }) => {
  return (
    <>
      {modal && (
        <div className="flex justify-center items-center w-[100vw] h-[100vh] fixed top-0 left-0 bg-[rgba(0, 0, 0, 0.7)] z-50 backdrop-blur-[20px]">
          <div className="relative flex justify-center items-center w-[90vw] h-[80vh] bg-[#202020] rounded-[32px] shadow-md shadow-[#090909]">
            <span
              onClick={() => {
                setModal(!modal);
              }}
              className="absolute top-0 left-0 m-4 w-8 h-8 flex justify-center items-center rounded-lg bg-slate-800 hover:bg-slate-950 text-slate-100 cursor-pointer"
            >
              X
            </span>
            <button className={cssCode}>Botón</button>
          </div>
        </div>
      )}
    </>
  );
};

/**
 *   width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(20px);
 */

export default Modal;
