import { ref, onMounted } from "vue";

/**
 * Attach an IntersectionObserver to all `[data-animate]` elements.
 * Returns a reactive `isVisible` map keyed by element id.
 */
export function useScrollReveal(threshold = 0.15) {
  const isVisible = ref({});

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value[entry.target.id] = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });
  });

  return { isVisible };
}
