// app/layout.tsx (or any other component)
import { Epilogue, Nunito_Sans } from '@next/font/google';
import '@/app/globals.css';

export const epilogue = Epilogue({
    preload: false,
    weight: ['400', '500', '700', '600', '800', '900'],
});

export const nunito = Nunito_Sans({
    preload: false,
    weight: ['400', '500', '700', '600', '800', '900'],
});