'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

// eslint-disable-next-line react/function-component-definition
export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Name must be 20 characters or less.')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string()
        .min(1, 'Please enter a message')
        .required('Message is required'),
    }),
  });
  return (
    <main className={`${styles.paddings}`} id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} w-full h-full mx-auto text-secondary`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col lg:flex-row"
        >
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-1 text-gray-700 w-full lg:w-1/2"
          >
            <h1 className="text-[80px] pb-2 font-bold">
              Contact
            </h1>
            <p className="text-lg w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-6 ">
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? 'text-red-400'
                      : ''
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : 'Name'}
                </label>
                <input
                  className="border-2 border-secondary text-secondary p-2 bg-transparent w-full focus:border-black"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="email"
                  className={`block text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? 'text-red-400'
                      : ''
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : 'Email'}
                </label>

                <input
                  className="border-2 border-secondary text-secondary p-2 bg-transparent w-full focus:border-black"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="message"
                  className={`block text-sm pb-2 ${
                    formik.touched.message && formik.errors.message
                      ? 'text-red-400'
                      : ''
                  } `}
                >
                  {formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : 'Message'}
                </label>
                <textarea
                  className="border-2 border-secondary text-secondary p-2 bg-transparent w-full focus:border-black"
                  name="message"
                  placeholder="Enter your message here"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />

              </div>
              <button
                type="submit"
                className="bg-black hover:bg-white hover:text-black border-2 border-secondary font-bold text-sm text-white py-3 mt-6 w-full"
              >
                Submit
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="w-full h-full lg:w-1/2 flex-col lg:pl-32 mt-12 lg:mt-32"
          >
            <p className="pb-2 font-bold">
              Lorem ipsum dolor
            </p>
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="pb-2 font-bold">
              Email
            </p>
            <p className="pb-2">
              example@domain.com
            </p>
            <p className="pb-2 font-bold">
              Phone
            </p>
            <p>
              (000)-000-0000
            </p>
          </motion.div>
        </form>
      </motion.div>
    </main>
  );
}
