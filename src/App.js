import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

const listAppointmentTime = ["08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"];
const regexName = /[^ a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]/g;
const regexPhone = /[^0-9]/g;

const currentYear = new Date().getFullYear();
const currentMounth = new Date().getMonth();
const currentDate = new Date().getDate();
const currentHours = new Date().getHours();
const currentTimestamp = new Date(currentYear + "-" + currentMounth + "-" + currentDate).getTime();

function NameInput() {
  let nameInputTrim;

  const [nameInput, setName] = useState()
  if (nameInput !== undefined) {
    nameInputTrim = nameInput.trim();
  }
  if (nameInput !== undefined && nameInputTrim !== "") {
    document.getElementById("messageInputNameNull").classList.add("d-none")
    document.getElementById("nameInput").value = nameInput.replace(regexName, "");
    document.getElementById("buttonSubmit").disabled = false;
  } else
    if (nameInputTrim === "") {
      document.getElementById("messageInputNameNull").classList.remove("d-none")
      document.getElementById("buttonSubmit").disabled = true;
    }

  return (
    <div className="mt-4">
      <label htmlFor="nameInput" className="form-label fw-bold">Họ Tên: </label>
      <input className="form-control" type={'text'} id={'nameInput'} name={'nameInput'} onBlur={e => setName(e.target.value)} onInput={e => setName(e.target.value)}></input>
      <div className="text-danger mt-1 ms-1 d-none" id={"messageInputNameNull"}>Họ Tên không được để trống</div>
    </div >
  )
}
function PhoneInput() {
  let phoneInputTrim;

  const [phoneInput, setPhone] = useState()
  if (phoneInput !== undefined) {
    phoneInputTrim = phoneInput.trim();
  }
  if (phoneInput !== undefined && phoneInputTrim !== "") {
    document.getElementById("messageInputPhoneNull").classList.add("d-none")
    document.getElementById("phoneInput").value = phoneInput.replace(regexPhone, "");
    document.getElementById("buttonSubmit").disabled = false;
  } else
    if (phoneInputTrim === "") {
      document.getElementById("messageInputPhoneNull").classList.remove("d-none")
      document.getElementById("buttonSubmit").disabled = true;
    }

  return (
    <div className="mt-2">
      <label htmlFor="phoneInput" className="form-label fw-bold">Số Điện Thoại: </label>
      <input className="form-control" type={'text'} id={'phoneInput'} name={'phoneInput'} onBlur={e => setPhone(e.target.value)} onInput={e => setPhone(e.target.value)}></input>
      <div className="text-danger mt-1 ms-1 d-none" id={"messageInputPhoneNull"}>Số điện thoại không được để trống</div>
    </div >
  )
}

function GenderInput() {
  return (
    <div className="mt-2">
      <label className="form-label fw-bold">Giới Tính: </label>
      <div className="d-flex ms-1">
        <div className="form-check">
          <input
            className="form-check-input" type={"radio"} value={"Nam"} name={"genderInput"} defaultChecked></input>
          <label className="form-check-label" htmlFor="flexRadioDefault1">Nam</label>
        </div>
        <div className="form-check ms-4">
          <input
            className="form-check-input" type={"radio"} value={"Nữ"} name={"genderInput"}></input>
          <label className="form-check-label" htmlFor="flexRadioDefault1">Nữ</label>
        </div>
      </div>
    </div>
  )
}

function DateOfBirthInput() {
  let birthday;
  let birthdayTimestamp;

  const [dateOfBirthInput, setDateOfBirth] = useState()

  if (dateOfBirthInput !== undefined && dateOfBirthInput !== "") {
    birthday = new Date(dateOfBirthInput);
    birthdayTimestamp = new Date(birthday.getFullYear() + "-" + birthday.getMonth() + "-" + birthday.getDate()).getTime();
    if (birthdayTimestamp - currentTimestamp > -1) {
      document.getElementById("messageInputDateOfBirthFuture").classList.remove("d-none");
      document.getElementById("messageInputDateOfBirthNull").classList.add("d-none")
      document.getElementById("buttonSubmit").disabled = true;
    } else
      if (birthdayTimestamp - currentTimestamp < -1) {
        document.getElementById("messageInputDateOfBirthFuture").classList.add("d-none");
        document.getElementById("messageInputDateOfBirthNull").classList.add("d-none")
        document.getElementById("buttonSubmit").disabled = false;
      }
  }
  if (dateOfBirthInput === "") {
    document.getElementById("messageInputDateOfBirthNull").classList.remove("d-none")
    document.getElementById("buttonSubmit").disabled = true;
  }

  return (
    <div className="mt-2">
      <label htmlFor="dateOfBirthInput" className="form-label fw-bold">Ngày Sinh: </label>
      <input type={"date"} className="form-control" id={"dateOfBirthInput"} onBlur={e => setDateOfBirth(e.target.value)} onChange={e => setDateOfBirth(e.target.value)}></input>
      <div className="text-danger mt-1 ms-1 d-none" id={"messageInputDateOfBirthNull"}>Ngày sinh không được để trống</div>
      <div className="text-danger mt-1 ms-1 d-none" id={"messageInputDateOfBirthFuture"}>Không thể chọn ngày sinh là ngày hiện tại hoặc trong tương lai</div>
    </div>
  )
}

function AppointmentDateInput() {
  let appointmentDate;
  let appointmentDateTimestamp;

  const [appointmentDateInput, setAppointmentDate] = useState()
  if (appointmentDateInput !== undefined && appointmentDateInput !== "") {
    appointmentDate = new Date(appointmentDateInput);
    appointmentDateTimestamp = new Date(appointmentDate.getFullYear() + "-" + appointmentDate.getMonth() + "-" + appointmentDate.getDate()).getTime();
    if (appointmentDateTimestamp < currentTimestamp) {
      genDefaultAppointmentTime();
      document.getElementById("messageInputAppointmentDatePast").classList.remove("d-none")
      document.getElementById("messageInputAppointmentDateNull").classList.add("d-none")
      document.getElementById("messageInputAppointmentDateThreshold").classList.add("d-none")
      document.getElementById("messageInputAppointmentDateOvertime").classList.add("d-none")
      document.getElementById("buttonSubmit").disabled = true;
    } else
      if (appointmentDateTimestamp === currentTimestamp && currentHours > 16) {
        genDefaultAppointmentTime();
        document.getElementById("messageInputAppointmentDateOvertime").classList.remove("d-none")
        document.getElementById("messageInputAppointmentDateNull").classList.add("d-none")
        document.getElementById("messageInputAppointmentDatePast").classList.add("d-none")
        document.getElementById("messageInputAppointmentDateThreshold").classList.add("d-none")
        document.getElementById("buttonSubmit").disabled = true;
      } else
        if ((appointmentDate.getMonth() >= currentMounth + 2 && appointmentDate.getDate() - currentDate > 0) || appointmentDate.getMonth() >= currentMounth + 3) {
          genDefaultAppointmentTime();
          document.getElementById("messageInputAppointmentDateThreshold").classList.remove("d-none")
          document.getElementById("messageInputAppointmentDateNull").classList.add("d-none")
          document.getElementById("messageInputAppointmentDatePast").classList.add("d-none")
          document.getElementById("messageInputAppointmentDateOvertime").classList.add("d-none")
          document.getElementById("buttonSubmit").disabled = true;
        } else {
          genOptionAppointmentTime();
          document.getElementById("messageInputAppointmentDateNull").classList.add("d-none")
          document.getElementById("messageInputAppointmentDatePast").classList.add("d-none")
          document.getElementById("messageInputAppointmentDateThreshold").classList.add("d-none")
          document.getElementById("messageInputAppointmentDateOvertime").classList.add("d-none")
          document.getElementById("buttonSubmit").disabled = false;
        }
  }
  if (appointmentDateInput === "") {
    genDefaultAppointmentTime();
    document.getElementById("messageInputAppointmentDateNull").classList.remove("d-none")
    document.getElementById("buttonSubmit").disabled = true;
  }

  return (
    <div className="mt-2">
      <label htmlFor="appointmentDateInput" className="form-label fw-bold">Ngày Hẹn: </label>
      <input type={"date"} className="form-control" id={"appointmentDateInput"} onBlur={e => setAppointmentDate(e.target.value)} onChange={e => setAppointmentDate(e.target.value)}></input>
      <div className="text-danger mt-1 ms-1 d-none" id={"messageInputAppointmentDateNull"}>Ngày hẹn không được để trống</div>
      <div className="text-danger mt-1 ms-1 d-none" id={"messageInputAppointmentDatePast"}>Không thể chọn ngày hẹn trong quá khứ</div>
      <div className="text-danger mt-1 ms-1 d-none" id={"messageInputAppointmentDateThreshold"}>Ngày hẹn không được vượt quá 2 tháng</div>
      <div className="text-danger mt-1 ms-1 d-none" id={"messageInputAppointmentDateOvertime"}>Giờ làm việc hôm nay đã hết, vui lòng chọn ngày khác</div>
    </div>
  )
}

function AppointmentTimeInput() {
  return (
    <div id={"selectAppointmentTime"} className="mt-3">
      <label htmlFor="appointmentTimeInput" className="form-label fw-bold">Giờ Hẹn: </label>
      <select className="ms-3 mt-1" id={"appointmentTimeInput"}>
        <option>Vui lòng chọn ngày hẹn</option>
      </select>
    </div>
  )
}

function ButtonSubmit() {
  return (
    <div className="mt-2 mb-4 d-flex justify-content-center align-items-center">
      <button id={"buttonSubmit"} className="mt-4 mb-4 btn btn-primary fw-bold w-50">Đặt Lịch</button>
    </div>
  )
}

function Form() {
  return (
    <div className="width-85 height-100 ">
      <div className="text-center mt-4">
        <h4 className="fw-bold">HẸN LỊCH KHÁM</h4>
      </div>
      <NameInput />
      <PhoneInput />
      <GenderInput />
      <DateOfBirthInput />
      <AppointmentDateInput />
      <AppointmentTimeInput />
      <ButtonSubmit />
    </div>
  );
}

export default Form;

function genOptionAppointmentTime() {
  if (document.getElementById("appointmentTimeInput") != null) {
    document.getElementById("appointmentTimeInput").remove();
  }

  let select = document.createElement("select");
  select.setAttribute("id", "appointmentTimeInput");
  select.setAttribute("name", "appointmentTimeInput");
  select.setAttribute("class", "ms-3 mt-1");

  document.getElementById("selectAppointmentTime").appendChild(select);

  for (let index = 0; index < listAppointmentTime.length; index++) {
    let option = document.createElement("option");
    option.setAttribute("value", listAppointmentTime[index]);
    option.text = listAppointmentTime[index];
    document.getElementById("appointmentTimeInput").add(option);
  }
}

function genDefaultAppointmentTime() {
  if (document.getElementById("appointmentTimeInput") != null) {
    document.getElementById("appointmentTimeInput").remove();
  }

  let select = document.createElement("select");
  select.setAttribute("id", "appointmentTimeInput");
  select.setAttribute("name", "appointmentTimeInput");
  select.setAttribute("class", "ms-3 mt-1");

  let option = document.createElement("option");
  option.text = "Vui lòng chọn ngày hẹn";

  document.getElementById("selectAppointmentTime").appendChild(select);
  document.getElementById("appointmentTimeInput").add(option);
};
