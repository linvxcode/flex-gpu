

import { useSpring, useTransform } from "framer-motion";



export const Parallax = (scrollY) => {
    const TranslateX = useTransform(scrollY, [100, 500], [-4, 0]);
    const RotateX = useTransform(scrollY, [100, 500], [43, 0]);
    const RotateZ = useTransform(scrollY, [100, 500], [0.2, 0]);
    const RotateY = useTransform(scrollY, [100, 500], [0, 0]);

    return {  TranslateX, RotateX, RotateZ, RotateY };
}