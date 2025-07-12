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