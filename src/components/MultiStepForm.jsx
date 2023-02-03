import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTransition, animated, useSpring } from "react-spring";

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

export default function MultiStepForm({
  step = 0,
  onChange = (step) => {},
  children,
}) {
  const wrapperRef = useRef();
  const next = useCallback(() => onChange(step + 1), [step, onChange]);
  const previous = useCallback(() => onChange(step - 1), [step, onChange]);
  const [spring, animate] = useSpring(
    () => ({
      height: "0px",
      config: {
        damping: 0.8,
        friction: 16,
      },
    }),
    []
  );

  useEffect(() => {
    let previousHeight = wrapperRef.current.offsetHeight;
    const resizeObserver = new ResizeObserver(() => {
      const height = wrapperRef.current.offsetHeight;
      const deltaH = height - previousHeight;
      previousHeight = height;
      if (height > 0)
        animate({
          height: height + "px",
        });
    });

    resizeObserver.observe(wrapperRef.current);
    console.log("re observed");
    return () => {
      resizeObserver.disconnect();
    };
  }, [animate]);

  return (
    <MultiStepFormContext.Provider
      value={{ currentStep: step, next, previous }}
    >
      <animated.div style={{ ...spring }}>
        <div ref={wrapperRef}>{children}</div>
      </animated.div>
    </MultiStepFormContext.Provider>
  );
}
