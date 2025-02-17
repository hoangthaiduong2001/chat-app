export interface CAlertDialogProps {
  label: string;
  title: string;
  onSubmit: () => void;
  onClose?: () => void;
}
