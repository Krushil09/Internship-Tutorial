import streamlit as st

st.title("Simple Calculator")

a = st.text_input("Enter First Number")
b = st.text_input("Enter Second Number")

if a and b:

    if st.button("+"):
        st.write("Result =", float(a) + float(b))

    if st.button("-"):
        st.write("Result =", float(a) - float(b))

    if st.button("*"):
        st.write("Result =", float(a) * float(b))

    if st.button("/"):
        st.write("Result =", float(a) / float(b))
else:
    st.write("Please enter both numbers.")
