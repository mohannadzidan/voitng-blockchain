import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTransition, animated } from "react-spring";

const MultiStepFormContext = createContext({
  isDefault: true,
  currentStep: 0,
  next() {},
  previous() {},
});

export function useMultiStepForm() {
  const { isDefault, currentStep, next, previous } =
    useContext(MultiStepFormContext);
  if (isDefault)
    throw new Error("cannot use useMultistepForm outside of MultiStepForm");
  return { currentStep, next, previous };
}

export function FormStep({ index, children }) {
  const { currentStep } = useMultiStepForm();
  const isVisible = currentStep === index;
  const transition = useTransition(isVisible, {
    config: {
      duration: 200,
    },
    from: { position: "absolute", visibility: "hidden", opacity: 0 },
    enter: { position: "relative", visibility: "visible", opacity: 1 },
    leave: { position: "absolute", visibility: "hidden", opacity: 0 },
  });
  return transition(
    (style, item) =>
      item && <animated.div style={style}>{children}</animated.div>
  );
}

export default function MultiStepForm({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const next = useCallback(() => setCurrentStep((p) => p + 1), []);
  const previous = useCallback(() => setCurrentStep((p) => p - 1), []);
  return (
    <MultiStepFormContext.Provider value={{ currentStep, next, previous }}>
      {children}
    </MultiStepFormContext.Provider>
  );
}
