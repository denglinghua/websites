import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

export default function useGlobal() {
  const $q = useQuasar();
  const { t, te } = useI18n({});
  const $t = t;
  const $te = te;
  return { $q, $t, $te };
}
