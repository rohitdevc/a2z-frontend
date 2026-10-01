export default function scrollWithOffset (ref: React.RefObject<HTMLDivElement | null>) {
    if (!ref.current) return;
    
    const offset = 200;
    
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({ top, behavior: "smooth" });
};