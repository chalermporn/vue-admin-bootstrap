var languageDefault = {
    'en': {
        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        limit: 'Limit reached ({{limit}} items max).',
        loading: 'Loading...',
        minLength: 'Min. Length',
        maxLength: 'Max. Length',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        notSelected: 'Nothing Selected',
        required: 'Required',
        search: 'Search'
    },
    'zh-CN': {
        daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
        limit: '限制 {{limit}} 个',
        loading: '加载中...',
        minLength: '最小长度',
        maxLength: '最大长度',
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        notSelected: 'Nothing Selected Item',
        required: '必要',
        search: '查询条件'
    }
};
export default function (lang, text) {
    if (arguments.length === 0) {
        return languageDefault;
    }
    if (arguments.length === 1) {
        if (!languageDefault[lang]) {
            console.warning('translation Error, the Required language ' + lang + 'is not defined');
        }
        return languageDefault[lang];
    }
    if (arguments.length === 2) {
        languageDefault[lang] = text;
    }
    return;
}
