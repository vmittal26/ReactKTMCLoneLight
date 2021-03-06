import * as React from "react";
import { Row, Col } from "antd";
import { FastField } from "formik";
import {
  AntDatePicker,
  AntInput,
  AntSelect,
  AntTextArea
} from "../../../Utils/AntDesignFieldCreator";
import getMasterDataFromMasterDataMap from "../../../Utils/MasterDataContainer";
import { dateFormat } from "../../../Utils/DateFormat";
import MasterDataURLEnum from "../../../model/constants/MasterDataURLEnum";

export default function GestioneKOPanelFase2() {
  const errorClassName = "text-left text-danger text-uppercase";
  return (
    <div className="DetailPagePanelContainer">
      <Row gutter={14} className="DetailPagePanel">
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
           component={AntSelect}
           name="tipiAnomalia.descrizione"
           selectOptions={getMasterDataFromMasterDataMap(MasterDataURLEnum.TipiAnomaliaList)}
           label="Tipo Anomalia"
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            component={AntInput}
            name="classeLavorazione."
            label="Classe Lavorazione"
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            component={AntSelect}
            selectOptions={getMasterDataFromMasterDataMap(MasterDataURLEnum.StatoLavorazioneList)}
            name="statiLavorazione.descrizione"
            label="Stato Lavorazione"
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            label="Data Apertura"
            component={AntDatePicker}
            name="dataAperturaSegnalazione"
            format={dateFormat}
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            label="Data Chiusura"
            component={AntDatePicker}
            name="dataChiusuraSegnalazione"
            format={dateFormat}
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            label="Data Lavorazione"
            component={AntDatePicker}
            name="dataLavorazione"
            format={dateFormat}
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            label="Data Fine Sospensione"
            component={AntDatePicker}
            name="dataFineSospensione"
            format={dateFormat}
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            label="Utente Ultima Modifica"
            component={AntInput}
            name="utenteUltimaModifica"
            type="text"
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            label="Gruppo"
            component={AntInput}
            name="gruppoUltimaModifica"
            type="text"
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            label="Data Mail OLO Donating"
            component={AntDatePicker}
            name="dataInvioMailOloDonatng"
            format={dateFormat}
          />
        </Col>
        <Col xl={4} lg={6} md={6} sm={8} xs={12}>
          <FastField
            label="Data Risposta Mail OLO Donating"
            component={AntDatePicker}
            name="dataRispostaMailOpDonating"
            format={dateFormat}
          />
        </Col>
        <Col xl={8} lg={12} md={12} sm={16} xs={24}>
          <FastField
            label="Note Olo DOnating"
            component={AntTextArea}
            type="text"
            name="noteOloDonating"
          />
        </Col>
        <Col xl={8} lg={12} md={12} sm={16} xs={24}>
          <FastField label="Note" component={AntTextArea} ismandatory="true" name="note" type="text" />
        </Col>
      </Row>
    </div>
  );
}
