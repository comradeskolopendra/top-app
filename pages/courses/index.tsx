import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { FC } from "react";

interface CoursesProps extends Record<string, unknown> {
    params: ParsedUrlQuery;
}

const Courses: FC<CoursesProps> = ({params}) => {
    console.log(params);

    return <div></div>
}

export default Courses;

export const getStaticProps: GetStaticProps = ({params}) => {

    return {
        props: {
            params
        }
    }
};