import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import ErrorAlert from "../layout/ErrorAlert"
import { createReservation, editReservation, listReservations } from "../utils/api"
import ReservationForm from "./ReservationForm"

export default function NewReservation({ loadDashboard, edit }) {
  return (
    <div>
      <h1>Create Reservation</h1>
      <ReservationForm loadDashboard={loadDashboard} edit={edit} />
    </div>
  )
}
