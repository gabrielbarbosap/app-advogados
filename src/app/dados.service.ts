import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }
  getall(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=&paramoutros=3&paramlimit_=400000&paramoffset_=0`)
  }
  getProfs(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=PROFESSOR&paramoutros=3&paramlimit_=100000&paramoffset_=0`)
  }
  analistaSaude(): Observable <any> {
    return this.http.get<any>(`http://localhost:3000/resultset`)
  }
  analistaGestao(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=ANALISTA_EM_GESTAO_EDUCACIONAL&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  enfermeiro(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=ENFERMEIRO&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  tecEnfermagem(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=TECNICO_EM_ENFERMAGEM&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  gestUniver(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=ANAL_TEC_EM_GEST_UNIVERSITARIA&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  soldado(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=SOLDADO&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  terceiroSarg(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=TERCEIRO_SARGENTO&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  segSarg(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=SEGUNDO_SARGENTO&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  primeiroSarg(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=PRIMEIRO_SARGENTO&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  subtenente(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=SUBTENENTE&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  segundoTenente(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=SEGUNDO_TENENTE&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  primeiroTenente(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=PRIMEIRO_TENENTE&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  tenenteCoronel(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=TENENTE_CORONEL&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  coronel(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=CORONEL&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
  pensao(): Observable <any> {
    return this.http.get<any>(`http://web.transparencia.pe.gov.br/pentaho/plugin/cda/api/doQuery?path=%2Fpublic%2FOpenReports%2FPortal_Producao%2FPainel_Remuneracao%2FPainel_Remuneracao.cda&dataAccessId=sql_jndi&parampara_ano=2021&parammes_=1&paramsituacao=%25&parammatricula_=&parampara_orgao=%25&parampesquisa_=&parampesquisa_cargo_=BENEFICIARIO_DE_PENSAO-99992&paramoutros=3&paramlimit_=500000000&paramoffset_=0`)
  }
}

