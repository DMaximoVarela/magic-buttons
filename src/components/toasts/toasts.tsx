import useToastStore from "@/stores/toastStore";
import Toast from "../toast/toast";

export default function Toasts() {
  const toasts = useToastStore((state) => state.toasts);

  return toasts.map((toast) => {
    return <Toast key={toast.id} message={toast.message} id={toast.id} />;
  });
}
