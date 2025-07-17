import {IFirstLevelMenuItem} from "@/interfaces/menu.interface";
import CoursesSvg from "@/helpers/assets/courses.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import ServicesSvg from "@/helpers/assets/services.svg";
import BooksSvg from "@/helpers/assets/books.svg";
import ProductsSvg from "@/helpers/assets/products.svg";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
    {
        route: "courses",
        name: "Курсы",
        icon: <CoursesSvg />,
        id: TopLevelCategory.COURSES
    },
    {
        route: "services",
        name: "Сервисы",
        icon: <ServicesSvg />,
        id: TopLevelCategory.SERVICES
    },
    {
        route: "books",
        name: "Книги",
        icon: <BooksSvg />,
        id: TopLevelCategory.BOOKS
    },
    {
        route: "products",
        name: "Товары",
        icon: <ProductsSvg />,
        id: TopLevelCategory.PRODUCTS
    }
];

export const formatCurrency = (currency: number) => {
    return new Intl.NumberFormat("ru-RU", {style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(currency);
}

// [отзыв, отзыва, отзывов]
export const declWord = (number: number, titles: [string, string, string]) => {
    const lastTens = number % 100;
    const lastNum = number % 10;

    if (lastNum === 1 && lastTens !== 11) {
        return titles[0]
    } else if (lastNum > 1 && lastNum < 5) {
        if (lastTens > 10) {
            return titles[2];
        } else {
            return titles[1];
        }
    } else {
        return titles[2]
    }
};