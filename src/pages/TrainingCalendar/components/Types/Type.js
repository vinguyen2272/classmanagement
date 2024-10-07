import Style from './type.module.css';
export const getEventClassNames = (eventType) => {
    switch (eventType) {
        case 'intern':
            return Style.fcEventIntern;
        case 'fresher':
            return Style.fcEventFresher;
        case 'onFresher':
            return Style.fcEventOnFresher;
        case 'offFresher':
            return Style.fcEventOffFresher;
        default:
            return '';
    }
};
export const getBlurClassNames = (eventType) => {
    switch (eventType) {
        case 'intern':
            return Style.fcEventInternBlur;
        case 'fresher':
            return Style.fcEventFresherBlur;
        case 'onFresher':
            return Style.fcEventOnFresherBlur;
        case 'offFresher':
            return Style.fcEventOffFresherBlur;
        default:
            return '';
    }
};
