import { FC, lazy } from 'react';
import { UploadWindowProps } from './UploadWindow';

export const UploadWindowAsync = lazy<FC<UploadWindowProps>>(async () => await import('./UploadWindow'));
