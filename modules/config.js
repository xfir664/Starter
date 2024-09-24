import gulp from 'gulp';
import { deleteSync } from 'del'

export const gulpConfig = {
    gulp: gulp,
    imports: {
        clean: deleteSync,
    },
    tasks: {

    },
}
