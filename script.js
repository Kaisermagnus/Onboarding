// DOM Element References
        const sidebar = document.getElementById('sidebar');
        const hamburgerButton = document.getElementById('hamburgerButton');
        const helpButton = document.getElementById('floatingHelpButton');
        const helpModal = document.getElementById('helpModal');
        const closeHelpModal = document.getElementById('closeHelpModal');
        const openFaqModalButton = document.getElementById('openFaqModalButton');
        const faqModal = document.getElementById('faqModal');
        const closeFaqModalButton = document.getElementById('closeFaqModalButton');

        const notificationButton = document.getElementById('notificationButton');
        const notificationDropdown = document.getElementById('notificationDropdown');
        const userMenuButton = document.getElementById('userMenuButton');
        const userDropdown = document.getElementById('userDropdown');
        const modalTabsHelp = document.querySelectorAll('#helpModal .modal-tab-button');
        const tabContentsHelp = document.querySelectorAll('#helpModal .tab-content');
        const statusTabsContainer = document.getElementById('statusTabsContainer');
        const solicitudesTableBody = document.getElementById('solicitudesTableBody');
        const solicitudesTableHeaders = document.querySelectorAll('.solicitudes-table th[data-sort-key]');
        const noResultsMessage = document.getElementById('noResultsMessage');
        const dateFromInput = document.getElementById('dateFrom');
        const dateToInput = document.getElementById('dateTo');
        const applyDateFilterButton = document.getElementById('applyDateFilter');
        const clearDateFilterButton = document.getElementById('clearDateFilter');
        const toastMessage = document.getElementById('toastMessage');
        const globalSearchInput = document.getElementById('globalSearchInput');
        const selectAllCheckbox = document.getElementById('selectAllCheckbox');
        const massActionsButton = document.getElementById('massActionsButton');

        // Solicitud Detail Modal Elements
        const solicitudDetailModal = document.getElementById('solicitudDetailModal');
        const closeSolicitudDetailModalButton = document.getElementById('closeSolicitudDetailModal');
        const solicitudDetailModalTitle = document.getElementById('solicitudDetailModalTitle');
        const copySolicitudIdIcon = document.getElementById('copySolicitudIdIcon');
        const solicitudDetailModalTabsContainer = document.getElementById('solicitudDetailModalTabs');
        const solicitudDetailTabContents = document.querySelectorAll('#solicitudDetailModal .detail-tab-content');
        const detailAprobarButton = document.getElementById('detailAprobarButton');
        const detailRechazarButton = document.getElementById('detailRechazarButton');
        const detailComentariosMC = document.getElementById('detailComentariosMC');
        const charCounterMC = document.getElementById('charCounterMC');
        const commentHistoryContainer = document.getElementById('commentHistory');
        const detailGuardarComentarioButton = document.getElementById('detailGuardarComentarioButton');
        const comentariosUnsavedIndicator = document.getElementById('comentariosUnsavedIndicator');
        const globalIncidentBanner = document.getElementById('globalIncidentBanner');
        const globalIncidentCount = document.getElementById('globalIncidentCount');
        const showOnlyIncidentsToggle = document.getElementById('showOnlyIncidentsToggle');
        const incidentsFilterContainer = document.getElementById('incidentsFilterContainer');

        // Tasas y Contratos Elements
        const guardarTasasButton = document.getElementById('guardarTasasButton');
        const generarContratosButton = document.getElementById('generarContratosButton');
        const contratosLoadingMessage = document.getElementById('contratosLoadingMessage');
        const contratoProgressCounter = document.getElementById('contratoProgressCounter');
        const contratosGeneradosList = document.getElementById('contratosGeneradosList');
        const inputComisionTransaccion = document.getElementById('inputComisionTransaccion');
        const downloadZipButton = document.getElementById('downloadZipButton');

        // Rejection Modal Elements
        const rejectionReasonModal = document.getElementById('rejectionReasonModal');
        const closeRejectionModalButton = document.getElementById('closeRejectionModalButton');
        const rejectionReasonSelect = document.getElementById('rejectionReasonSelect');
        const rejectionReasonText = document.getElementById('rejectionReasonText');
        const rejectionCharCounter = document.getElementById('rejectionCharCounter');
        const confirmRejectionButton = document.getElementById('confirmRejectionButton');
        const cancelRejectionButton = document.getElementById('cancelRejectionButton');

        // Correction Modal Elements
        const requestCorrectionModal = document.getElementById('requestCorrectionModal');
        const closeCorrectionModalButton = document.getElementById('closeCorrectionModalButton');
        const correctionMessageText = document.getElementById('correctionMessageText');
        const confirmCorrectionButton = document.getElementById('confirmCorrectionButton');
        const cancelCorrectionButton = document.getElementById('cancelCorrectionButton');

        // Generic Confirmation Modal Elements
        const confirmationModal = document.getElementById('confirmationModal');
        const confirmationModalTitle = document.getElementById('confirmationModalTitle');
        const confirmationModalText = document.getElementById('confirmationModalText');
        const confirmActionButton = document.getElementById('confirmActionButton');
        const cancelConfirmationButton = document.getElementById('cancelConfirmationButton');
        const closeConfirmationModal = document.getElementById('closeConfirmationModal');


        // Pagination Elements
        const paginationControls = document.getElementById('paginationControls');
        const prevPageButton = document.getElementById('prevPageButton');
        const nextPageButton = document.getElementById('nextPageButton');
        const pageInfo = document.getElementById('pageInfo');
        const ITEMS_PER_PAGE = 5;
        let currentPage = 1;


        // Translations Object
        const translations = {
            es: {
                nav_home: "Inicio",
                nav_mpos: "Clientes",
                nav_reports: "Reportes",
                nav_config: "Configuración",
                nav_logout: "Cerrar Sesión",
                user_name_placeholder: "Alex Pérez",
                help_button_text_float: "¿Necesitas ayuda?",
                modal_help_title_tabs: "Centro de Ayuda",
                contact_support_label: "Soporte Técnico",
                contact_mc_label: "Mesa de Control",
                contact_ux_label: "Mejoras en Experiencia de Usuario",
                notification_ux_new_sol_title: "Nueva Solicitud",
                notification_ux_new_sol_body: "Solicitud #100003 de 'Abarrotes Don Pepe' lista para revisión.",
                notification_ux_incidencias_title: "Incidencias en Documentos",
                notification_ux_incidencias_body: "Solicitud #100002 (TecnoSoluciones) tiene 2 incidencias.",
                notification_ux_firmada_title: "Contrato Firmado",
                notification_ux_firmada_body: "Contrato de Solicitud #100001 (Servicios Digitales) ha sido firmado.",
                notification_ux_docs_ok_title: "Documentos Verificados",
                notification_ux_docs_ok_body: "Documentos de Solicitud #100003 (Abarrotes Don Pepe) son correctos.",
                notification_ux_sla_vencido_title: "Alerta de SLA",
                notification_ux_sla_vencido_body: "Solicitud #100002 (TecnoSoluciones) tiene más de 24h sin avance.",
                user_menu_profile: "Perfil",
                user_menu_settings: "Configuración",
                user_menu_logout: "Cerrar Sesión",
                solicitudes_title: "Solicitudes de Registro de Comercios",
                date_filter_from: "Desde:",
                date_filter_to: "Hasta:",
                date_filter_apply: "Filtrar por Fecha",
                date_filter_clear: "Limpiar",
                status_tab_all: "Todas",
                status_tab_new: "Nuevas",
                status_tab_in_negotiation: "En Negociación",
                status_tab_in_review: "En Revisión",
                status_tab_in_progress: "En Proceso",
                status_tab_rejected: "Rechazadas",
                status_tab_authorized: "Autorizadas",
                status_tab_pending_signature: "Pendiente Firma",
                status_tab_signed: "Firmadas",
                table_header_id: "ID Solicitud",
                table_header_date: "Fecha Solicitud",
                table_header_name: "Nombre Comercio",
                table_header_type: "Tipo Persona",
                table_header_status: "Estado",
                table_header_ia_analysis: "Análisis IA",
                table_header_dias_etapa: "Días en Etapa",
                table_header_dias_proceso: "Días de Proceso",
                // table_header_actions: "Acciones", // Removed
                action_view_details_icon_title: "Ver Detalles de Solicitud",
                ia_status_ok: "Docs OK",
                ia_status_issues: "Incidencias",
                ia_status_pending: "Pendiente",
                ia_analysis_no_incidences: "Sin Incidencias",
                ia_analysis_has_incidences: "{count} Incidencias",
                status_nuevas: "Nueva",
                status_enProceso: "En Proceso",
                status_enNegociacion: "En Negociación",
                status_enRevision: "En Revisión",
                status_autorizadas: "Autorizada",
                status_pendienteFirma: "Pendiente Firma",
                status_firmadas: "Firmada",
                status_rechazada: "Rechazada",
                no_solicitudes_message: "No hay solicitudes que coincidan con el filtro seleccionado.",
                detail_tab_resumen_ux: "Resumen",
                detail_tab_analisis_ia: "Análisis IA",
                detail_tab_tasas_comisiones: "Comisión",
                detail_tab_contratos: "Contratos",
                detail_tab_comentarios_ux: "Comentarios",
                detail_section_title_resumen_solicitud: "Resumen de la Solicitud",
                detail_label_id: "ID Solicitud:",
                detail_label_fecha_sol: "Fecha Solicitud:",
                detail_label_nombre_comercio: "Nombre Comercio:",
                detail_label_tipo_persona: "Tipo Persona:",
                detail_label_estado_general: "Estado General:",
                detail_label_analisis_ia: "Análisis IA:",
                detail_label_dias_etapa: "Días en Etapa:",
                detail_label_dias_proceso: "Días de Proceso:",
                detail_section_title_datos_comp: "Datos Complementarios del Comercio",
                detail_label_rfc: "RFC del Negocio:",
                detail_label_giro: "Giro del Negocio / Industria:",
                detail_label_ano_fundacion: "Año de Fundación:",
                detail_label_num_empleados: "Número de Empleados:",
                detail_label_ventas_anuales: "Ventas Anuales Estimadas:",
                detail_label_ticket_promedio: "Ticket Promedio Estimado:",
                detail_label_ventas_linea: "¿Ventas en línea?:",
                detail_label_plataformas: "Plataformas utilizadas:",
                detail_label_sucursales: "¿Sucursales físicas?:",
                detail_label_cant_sucursales: "Cantidad de sucursales:",
                detail_label_sitio_web: "Sitio Web (opcional):",
                detail_label_red_social: "Red Social con mayor impacto (opcional):",
                detail_label_no_tiene: "(No tiene)",
                detail_section_title_documentos: "Documentos Adjuntos",
                detail_section_title_verif_ia_global: "Resultado General",
                detail_section_title_tasas_comisiones: "Configuración de Comisión",
                detail_section_title_contratos: "Generación de Contratos",
                detail_section_title_conversacion: "Conversación",
                label_tasa_descuento: "Tasa de Descuento (%):",
                label_comision_transaccion: "Comisión por Transacción ($):",
                tooltip_comision_transaccion: "Comisión por cada transacción exitosa.",
                label_renta_tpv: "Renta Mensual TPV ($):",
                button_guardar_tasas: "Guardar Comisión",
                button_generar_contratos: "Generar Contratos",
                button_regenerar_contratos: "Re-generar Contratos",
                button_autorizar_enviar_contratos: "Autorizar y enviar contratos",
                button_revision_solicitud: "Solicitar Corrección",
                button_aprobar_solicitud: "Aprobar Solicitud",
                msj_conectando_api_contratos: "Generando tus contratos con WeeTrust… Esto tomará unos segundos.",
                msj_contratos_generados_exito: "Contratos generados exitosamente:",
                contrato_general: "Contrato General",
                contrato_anexo_a: "Anexo A - Comisiones",
                contrato_anexo_b: "Anexo B - Términos TPV",
                doc_name_ine: "INE vigente",
                doc_name_contacto: "Correo electrónico y teléfono",
                doc_name_csf_pf: "Constancia de Situación Fiscal (PF)",
                doc_name_csf_pm: "Constancia de Situación Fiscal (PM)",
                doc_name_csf_rl: "Constancia de Situación Fiscal (RL)",
                doc_name_comp_dom: "Comprobante de domicilio",
                doc_name_fotos_dom: "Fotografías del domicilio fiscal",
                doc_name_fotos_act: "Fotografías actividad económica",
                doc_name_fiel: "FIEL activa (vigencia y acuse)",
                doc_name_excel_pf_transfer: "Excel – PF TRANSFER/ASP",
                doc_name_word_costo: "Word – Solicitud Alta Centro de Costo",
                doc_name_excel_pf_cedula: "Excel – PFAE Cédula de Identificación",
                doc_name_acta_const: "Acta constitutiva",
                doc_name_reg_pub: "Registro Público de la Propiedad",
                doc_name_organigrama: "Organigrama",
                doc_name_excel_pm_transfer: "Excel – PM TRANSFER",
                doc_name_excel_pm_asp: "Excel – PM ASP",
                doc_name_excel_pm_cedula: "Excel – Moral Cédula de Información",
                doc_action_ver: "Ver Archivo",
                doc_action_replace: "Reemplazar",
                doc_status_ok: "OK",
                doc_status_incidencia: "Incidencia",
                doc_status_pendiente: "Pendiente",
                doc_incidencia_ine_vencida: "INE no vigente o ilegible.",
                doc_incidencia_csf_antigua: "CSF con antigüedad mayor a 90 días.",
                doc_incidencia_dom_antiguo: "Comprobante de domicilio con antigüedad mayor a 90 días.",
                doc_incidencia_fotos_no_claras: "Fotografías no claras, incompletas o no corresponden.",
                doc_incidencia_acta_incompleta: "Acta constitutiva ilegible o incompleta.",
                doc_incidencia_fiel_no_valida: "FIEL no vigente o acuse incorrecto.",
                verif_status_ok_chip: "Verificado y Validado",
                verif_status_ok_desc: "Datos consistentes y verificados.",
                verif_status_no_verificable: "No Verificable",
                verif_status_parcial: "Verificación Parcial con Observaciones",
                observations_label: "Observaciones",
                detail_action_guardar_comentario: "Guardar Comentario",
                detail_action_rechazar_solicitud: "Rechazar Solicitud",
                toast_solicitud_aprobada_a_negociacion: "Solicitud <strong>{id}</strong> aprobada y movida a 'En Negociación'.",
                toast_solicitud_revision: "Solicitud de corrección para <strong>{id}</strong> enviada. Movida a 'En Revisión'.",
                toast_solicitud_autorizada_contratos: "Solicitud <strong>{id}</strong> autorizada y movida a 'Pendiente Firma'.",
                toast_solicitud_rechazada: "Solicitud <strong>{id}</strong> ha sido marcada como 'Rechazada'.",
                comentario_guardado: "Comentario guardado exitosamente.",
                comentario_no_guardado_alerta: "Tiene comentarios sin guardar. ¿Desea cerrar de todas formas?",
                modal_title_motivo_rechazo: "Motivo del Rechazo",
                label_motivo_rechazo: "Seleccione un motivo principal:",
                modal_title_request_correction: "Solicitar Corrección al Cliente",
                label_correction_message: "Mensaje para el cliente (basado en incidencias):",
                button_confirm_correction: "Enviar Solicitud de Corrección",
                button_confirmar_rechazo: "Confirmar Rechazo",
                button_cancelar: "Cancelar",
                alerta_motivo_vacio: "Debe seleccionar un motivo de rechazo.",
                id_copiado: "ID de Solicitud copiado al portapapeles.",
                tooltip_copiar_id: "Copiar ID de Solicitud",
                tooltip_doc_ok: "Documento validado por IA",
                tasas_guardadas_exito: "Comisión guardada exitosamente.",
                contratos_generados_toast: "Contratos generados exitosamente.",
            },
        };
        let currentLangReg = 'es';

        // State
        let currentSortKey = 'fecha';
        let currentSortDirection = 'desc';
        let currentFilterDateFrom = null;
        let currentFilterDateTo = null;
        let currentOpenSolicitudId = null;
        let analisisIATabVisited = false;
        let lastSavedComment = "";
        let unsavedCommentExists = false;
        let tasasGuardadasParaSolicitudActual = false;
        let contratosGeneradosParaSolicitudActual = false;


        // Define critical document order
        const criticalDocOrder = [
            "doc_name_ine", "doc_name_csf_pf", "doc_name_csf_pm", "doc_name_csf_rl", "doc_name_comp_dom", "doc_name_acta_const", "doc_name_fiel"
        ];

        // Helper to generate full document list
        function generateDocumentList(tipo, id) {
            let baseDocs = [];
            const date = new Date().toISOString().split('T')[0];
            const fileSize = () => `${(Math.random() * 5 + 0.5).toFixed(1)}MB`;

            if (tipo === 'Persona Física') {
                baseDocs = [
                    { nombreKey: "doc_name_ine", archivo: `ine_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_contacto", archivo: `contacto_${id}.txt`, estadoIA: "OK", incidencia: "", fileSize: "1KB", fileDate: date },
                    { nombreKey: "doc_name_csf_pf", archivo: `csf_pf_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_comp_dom", archivo: `domicilio_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_fotos_dom", archivo: `fotos_dom_${id}.zip`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_fiel", archivo: `fiel_${id}.zip`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_excel_pf_transfer", archivo: `infocliente_${id}.xlsx`, estadoIA: "OK", incidencia: "", fileSize: "50KB", fileDate: date },
                    { nombreKey: "doc_name_word_costo", archivo: `centrocosto_${id}.docx`, estadoIA: "OK", incidencia: "", fileSize: "30KB", fileDate: date },
                    { nombreKey: "doc_name_excel_pf_cedula", archivo: `cedula_pf_${id}.xlsx`, estadoIA: "OK", incidencia: "", fileSize: "45KB", fileDate: date },
                ];
            } else { // Persona Moral
                 baseDocs = [
                    { nombreKey: "doc_name_ine", archivo: `ine_rl_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_csf_rl", archivo: `csf_rl_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_csf_pm", archivo: `csf_pm_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_comp_dom", archivo: `domicilio_pm_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_fotos_dom", archivo: `fotos_dom_pm_${id}.zip`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_fotos_act", archivo: `fotos_act_pm_${id}.zip`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_acta_const", archivo: `acta_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_reg_pub", archivo: `rpp_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_organigrama", archivo: `organigrama_${id}.pdf`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_fiel", archivo: `fiel_pm_${id}.zip`, estadoIA: "OK", incidencia: "", fileSize: fileSize(), fileDate: date },
                    { nombreKey: "doc_name_excel_pm_transfer", archivo: `transfer_pm_${id}.xlsx`, estadoIA: "OK", incidencia: "", fileSize: "60KB", fileDate: date },
                    { nombreKey: "doc_name_excel_pm_asp", archivo: `asp_pm_${id}.xlsx`, estadoIA: "OK", incidencia: "", fileSize: "65KB", fileDate: date },
                    { nombreKey: "doc_name_excel_pm_cedula", archivo: `cedula_pm_${id}.xlsx`, estadoIA: "OK", incidencia: "", fileSize: "55KB", fileDate: date },
                ];
            }
            return baseDocs;
        }

        // Mock Data
        let mockSolicitudes = [
            {
                id: "100003", fecha: "2024-07-30", nombre: "Abarrotes Don Pepe", tipoPersona: "Persona Física",
                estatusKey: "nuevas", diasEnEtapa: 1, diasEnProceso: 1,
                rfc: "PEPJ700707J07", giro: "Tienda de Abarrotes", anoFundacion: 2005, numEmpleados: "1-5", ventasAnuales: "Menos de $500,000", ticketPromedio: 80,
                ventasLinea: "No", plataformasOnline: "", sucursalesFisicas: "Sí", cantidadSucursales: 1, paginaWeb: "", redSocial: "https://facebook.com/donpepe",
                verificacionGub: { estado: "OK", observaciones: "", fecha: "2024-07-30 14:00"},
                comentariosInternos: [ { usuario: "Alex Pérez", fecha: "2024-07-30 14:05", comentario: "Cliente contactado, parece todo en orden."} ],
                tasas: null, contratosGenerados: false, tasasGuardadas: false, motivoRechazo: ""
            },
            {
                id: "100004", fecha: "2024-08-01", nombre: "Consultoría Global", tipoPersona: "Persona Moral",
                estatusKey: "enNegociacion", diasEnEtapa: 0, diasEnProceso: 3,
                rfc: "CGL200101ABC", giro: "Servicios Profesionales", anoFundacion: 2020, numEmpleados: "5-10", ventasAnuales: "$500,000 - $1,000,000", ticketPromedio: 2500,
                ventasLinea: "Sí", plataformasOnline: "Sitio Web Propio", sucursalesFisicas: "Sí", cantidadSucursales: 1, paginaWeb: "https://consultoriaglobal.com", redSocial: "https://linkedin.com/company/consultoriaglobal",
                verificacionGub: { estado: "OK", observaciones: "", fecha: "2024-08-01 10:00"},
                comentariosInternos: [ { usuario: "Alex Pérez", fecha: "2024-08-01 11:00", comentario: "Solicitud aprobada por mesa de control, lista para definir tasas."} ],
                tasas: { comisionTransaccion: "2.00" },
                contratosGenerados: false, tasasGuardadas: true,
                motivoRechazo: ""
            },
            {
                id: "100005", fecha: "2024-08-02", nombre: "Restaurante La Delicia", tipoPersona: "Persona Física",
                estatusKey: "autorizadas", diasEnEtapa: 1, diasEnProceso: 5,
                rfc: "DELR850505R5A", giro: "Restaurantes", anoFundacion: 2010, numEmpleados: "5-10", ventasAnuales: "$1,000,000 - $5,000,000", ticketPromedio: 250,
                ventasLinea: "No", plataformasOnline: "", sucursalesFisicas: "Sí", cantidadSucursales: 2, paginaWeb: "https://ladelicia.com", redSocial: "https://instagram.com/ladelicia",
                verificacionGub: { estado: "OK", observaciones: "", fecha: "2024-08-02 11:00"},
                comentariosInternos: [ { usuario: "Mesa de Control", fecha: "2024-08-02 12:00", comentario: "Comisión autorizada. Listo para generar contratos."} ],
                tasas: { comisionTransaccion: "2.75" }, contratosGenerados: false, tasasGuardadas: true, motivoRechazo: ""
            },
             {
                id: "100007", fecha: "2024-07-28", nombre: "Fonda Doña Pelos", tipoPersona: "Persona Física",
                estatusKey: "pendienteFirma", diasEnEtapa: 4, diasEnProceso: 8,
                rfc: "PEPJ800101XX1", giro: "Alimentos", anoFundacion: 2018, numEmpleados: "1-5", ventasAnuales: "Menos de $500,000", ticketPromedio: 150,
                verificacionGub: { estado: "OK", observaciones: "", fecha: "2024-07-29 10:30"},
                comentariosInternos: [{usuario: "Mesa de Control", fecha: "2024-07-30 11:00", comentario: "Contratos enviados al cliente."}],
                tasas: { comisionTransaccion: "3.50" }, contratosGenerados: true, tasasGuardadas: true, motivoRechazo: ""
            },
            {
                id: "100008", fecha: "2024-07-25", nombre: "Constructora Robusta", tipoPersona: "Persona Moral",
                estatusKey: "rechazadas", diasEnEtapa: 5, diasEnProceso: 2,
                rfc: "CRO220101CRO", giro: "Construcción", anoFundacion: 2022, numEmpleados: "20-50", ventasAnuales: "Más de $5,000,000", ticketPromedio: 50000,
                verificacionGub: { estado: "OK", observaciones: "", fecha: "2024-07-26 18:00"},
                comentariosInternos: [{usuario: "Mesa de Control", fecha: "2024-07-27 10:00", comentario: "RECHAZO: Actividad económica fuera de políticas."}],
                tasas: null, contratosGenerados: false, tasasGuardadas: false, motivoRechazo: "Actividad económica fuera de políticas."
            }
        ];

        mockSolicitudes = mockSolicitudes.map(s => {
            return {
                ...s,
                iaIncidencias: 0,
                iaDocs: "OK",
                estatusDisplay: translations.es[`status_${s.estatusKey}`] || s.estatusKey,
                diasEnProceso: s.diasEnProceso === undefined ? s.diasEnEtapa : s.diasEnProceso,
            }
        });

        // Helper Functions
        function normalizeText(text) {
            return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
        }

        function sortData(data, key, direction) {
            let dataToSort = [...data];
            dataToSort.sort((a, b) => {
                let valA = a[key];
                let valB = b[key];

                if (key === 'id' || key === 'iaIncidencias' || key === 'diasEnEtapa' || key === 'diasEnProceso') {
                    valA = Number(valA);
                    valB = Number(valB);
                } else if (key === 'fecha') {
                    valA = new Date(a.fecha).getTime();
                    valB = new Date(b.fecha).getTime();
                } else if (typeof valA === 'string' && typeof valB === 'string') {
                    valA = valA.toLowerCase();
                    valB = valB.toLowerCase();
                }

                if (valA < valB) return direction === 'asc' ? -1 : 1;
                if (valA > valB) return direction === 'asc' ? 1 : -1;
                return 0;
            });
            return dataToSort;
        }

        function updateSortIndicators() {
            solicitudesTableHeaders.forEach(header => {
                const indicatorIcon = header.querySelector('.sort-indicator i');
                const indicatorWrapper = header.querySelector('.sort-indicator');
                if (indicatorIcon && indicatorWrapper) {
                    indicatorIcon.className = 'fas fa-sort'; // Reset
                    indicatorWrapper.classList.remove('asc', 'desc');
                    if (header.dataset.sortKey === currentSortKey) {
                        indicatorIcon.classList.replace('fa-sort', currentSortDirection === 'asc' ? 'fa-sort-up' : 'fa-sort-down');
                        indicatorWrapper.classList.add(currentSortDirection);
                    }
                }
            });
        }

        function updateTabCounters() {
            let dataForCounts = [...mockSolicitudes];
            const searchTerm = globalSearchInput.value ? normalizeText(globalSearchInput.value) : '';
            if (searchTerm) {
                 dataForCounts = dataForCounts.filter(s =>
                    normalizeText(s.nombre).includes(searchTerm) ||
                    normalizeText(s.id).includes(searchTerm) ||
                    (s.rfc && normalizeText(s.rfc).includes(searchTerm))
                );
            }
            if (currentFilterDateFrom && currentFilterDateTo) {
                const from = new Date(currentFilterDateFrom).getTime();
                const to = new Date(currentFilterDateTo).getTime();
                dataForCounts = dataForCounts.filter(s => {
                    const solDate = new Date(s.fecha).getTime();
                    return solDate >= from && solDate <= to;
                });
            }
            const statusCounts = { nuevas: 0, enNegociacion:0, autorizadas:0, pendienteFirma: 0, firmadas: 0, rechazadas: 0 };
            dataForCounts.forEach(s => { if (statusCounts.hasOwnProperty(s.estatusKey)) statusCounts[s.estatusKey]++; });

            statusTabsContainer.querySelectorAll('.status-tab-button').forEach(tabButton => {
                const filterKey = tabButton.dataset.statusFilter;
                const countSpan = tabButton.querySelector('.status-tab-count');
                if (countSpan && statusCounts.hasOwnProperty(filterKey)) {
                    if (statusCounts[filterKey] > 0) {
                        countSpan.textContent = `(${statusCounts[filterKey]})`;
                        countSpan.classList.remove('hidden');
                    } else {
                        countSpan.textContent = '';
                        countSpan.classList.add('hidden');
                    }
                }
            });
        }

        function renderSolicitudesTable(filterStatus = 'todas', searchTerm = '') {
            if (!solicitudesTableBody || !noResultsMessage) return;

            let dataToRender = [...mockSolicitudes];

            // Apply Date Filter
            if (currentFilterDateFrom && currentFilterDateTo) {
                const from = new Date(currentFilterDateFrom).getTime();
                const to = new Date(currentFilterDateTo).getTime();
                dataToRender = dataToRender.filter(s => new Date(s.fecha).getTime() >= from && new Date(s.fecha).getTime() <= to);
            }

            // Apply Search Filter
            if (searchTerm) {
                const lowerSearchTerm = normalizeText(searchTerm);
                dataToRender = dataToRender.filter(s =>
                    normalizeText(s.nombre).includes(lowerSearchTerm) ||
                    normalizeText(s.id).includes(lowerSearchTerm) ||
                    (s.rfc && normalizeText(s.rfc).includes(lowerSearchTerm))
                );
            }

            // Apply Status Filter
            if (filterStatus !== 'todas') {
                dataToRender = dataToRender.filter(s => s.estatusKey === filterStatus);
            }

            // Sorting (apply after all filters)
            if (filterStatus === 'todas' && !searchTerm) {
                currentSortKey = 'fecha';
                currentSortDirection = 'desc';
            } else if ((filterStatus === 'enNegociacion' || filterStatus === 'rechazadas') && !searchTerm) {
                 currentSortKey = 'diasEnEtapa';
                 currentSortDirection = 'desc';
            }
            dataToRender = sortData(dataToRender, currentSortKey, currentSortDirection);

            updateSortIndicators();
            updateTabCounters();

            // Pagination Logic
            const totalItems = dataToRender.length;
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
            currentPage = Math.min(Math.max(1, currentPage), totalPages || 1);

            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            const paginatedData = dataToRender.slice(startIndex, endIndex);


            solicitudesTableBody.innerHTML = '';
            if (paginatedData.length === 0) {
                noResultsMessage.classList.remove('hidden');
            } else {
                noResultsMessage.classList.add('hidden');
            }


            paginatedData.forEach(solicitud => {
                const row = solicitudesTableBody.insertRow();
                row.tabIndex = 0;
                row.dataset.id = solicitud.id;

                const checkboxCell = row.insertCell();
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500';
                checkboxCell.appendChild(checkbox);

                row.insertCell().textContent = solicitud.id;
                row.insertCell().textContent = solicitud.fecha;
                row.insertCell().textContent = solicitud.nombre;
                row.insertCell().textContent = solicitud.tipoPersona;

                const estadoCell = row.insertCell();
                const estatusBadge = document.createElement('span');
                estatusBadge.classList.add('status-badge');
                const estatusTextKey = `status_${solicitud.estatusKey}`;
                const estatusText = translations[currentLangReg][estatusTextKey] || solicitud.estatusDisplay;

                const icons = {
                    nuevas: 'fa-file-alt',
                    enNegociacion: 'fa-comments-dollar',
                    autorizadas: 'fa-check-double',
                    pendienteFirma: 'fa-pen-fancy',
                    firmadas: 'fa-file-signature',
                    rechazadas: 'fa-times-circle'
                };
                estatusBadge.innerHTML = `<i class="fas ${icons[solicitud.estatusKey] || 'fa-info-circle'} mr-1"></i> ${estatusText}`;
                const statusClasses = {
                    nuevas: 'nuevas',
                    enNegociacion: 'en-negociacion',
                    autorizadas: 'autorizada',
                    pendienteFirma: 'pendiente-firma',
                    firmadas: 'firmada',
                    rechazadas: 'incidencias'
                };
                estatusBadge.classList.add(statusClasses[solicitud.estatusKey] || 'status-badge-gray');
                estadoCell.appendChild(estatusBadge);

                const diasEtapaCell = row.insertCell();
                const diasEtapaChip = document.createElement('span');
                diasEtapaChip.textContent = solicitud.diasEnEtapa;
                diasEtapaChip.classList.add('dias-etapa-cell');
                if (solicitud.diasEnEtapa === 0) diasEtapaChip.classList.add('azul');
                else if (solicitud.diasEnEtapa === 1) diasEtapaChip.classList.add('verde');
                else if (solicitud.diasEnEtapa === 2) diasEtapaChip.classList.add('amarillo');
                else if (solicitud.diasEnEtapa === 3) diasEtapaChip.classList.add('naranja');
                else {
                    diasEtapaChip.classList.add('rojo');
                }
                diasEtapaCell.appendChild(diasEtapaChip);

                // Días de Proceso Column
                row.insertCell().textContent = solicitud.diasEnProceso !== undefined ? solicitud.diasEnProceso : '-';


                row.addEventListener('click', () => openSolicitudDetailModal(solicitud.id));
                row.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        openSolicitudDetailModal(solicitud.id);
                    }
                });
            });

            // Update Pagination Controls
            if (paginationControls) {
                paginationControls.classList.toggle('hidden', totalPages <= 1);
                pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
                prevPageButton.disabled = currentPage === 1;
                nextPageButton.disabled = currentPage === totalPages;
            }
        }

        function showSkeletonRows(count = ITEMS_PER_PAGE) {
            if (!solicitudesTableBody) return;
            solicitudesTableBody.innerHTML = '';
            for (let i = 0; i < count; i++) {
                const row = solicitudesTableBody.insertRow();
                row.classList.add('skeleton-row');
                for (let j = 0; j < 8; j++) {
                    const cell = row.insertCell();
                    const div = document.createElement('div');
                    cell.appendChild(div);
                }
            }
            noResultsMessage.classList.add('hidden');
            if (paginationControls) paginationControls.classList.add('hidden');
        }


        function copyToClipboard(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                showToast(translations[currentLangReg].id_copiado || "ID copiado.");
            } catch (err) {
                showToast('Error al copiar ID.', 'error');
            }
            document.body.removeChild(textarea);
        }

        function openSolicitudDetailModal(solicitudId, defaultTabId = 'detailTabResumen') {
            currentOpenSolicitudId = solicitudId;
            analisisIATabVisited = true; // No longer needed for logic, but kept for safety
            unsavedCommentExists = false;

            const comentariosUnsavedIndicator = document.getElementById('comentariosUnsavedIndicator');
            if(comentariosUnsavedIndicator) comentariosUnsavedIndicator.style.display = 'none';


            const solicitud = mockSolicitudes.find(s => s.id === solicitudId);
            if (!solicitud || !solicitudDetailModal) return;

            tasasGuardadasParaSolicitudActual = solicitud.tasasGuardadas || false;
            contratosGeneradosParaSolicitudActual = solicitud.contratosGenerados || false;


            solicitudDetailModalTitle.textContent = `Detalle Solicitud: ${solicitud.id} - ${solicitud.nombre}`;
            if(copySolicitudIdIcon) {
                copySolicitudIdIcon.title = translations[currentLangReg].tooltip_copiar_id || "Copiar ID de Solicitud";
                copySolicitudIdIcon.onclick = () => copyToClipboard(solicitud.id);
            }

            const allModalTabs = solicitudDetailModalTabsContainer.querySelectorAll('.modal-tab-button');

            allModalTabs.forEach(tab => {
                const statusSpecific = tab.dataset.statusSpecific;
                const tabIsVisible = !statusSpecific || (statusSpecific === solicitud.estatusKey);
                tab.classList.toggle('visible', tabIsVisible);
                tab.classList.toggle('hidden', !tabIsVisible);
            });


            // Populate "Resumen" Tab
            document.getElementById('modalDetailId').textContent = solicitud.id;
            document.getElementById('modalDetailFechaSolicitud').textContent = solicitud.fecha;
            document.getElementById('modalDetailNombreComercio').textContent = solicitud.nombre;
            document.getElementById('modalDetailTipoPersona').textContent = solicitud.tipoPersona;
            document.getElementById('modalDetailDiasEnProceso').textContent = solicitud.diasEnProceso;

            const estadoGeneralBadgeModal = document.getElementById('modalDetailEstadoGeneral');
            if (estadoGeneralBadgeModal) { // Check if element exists
                estadoGeneralBadgeModal.innerHTML = '';
                const estadoBadgeInner = document.createElement('span');
                estadoBadgeInner.className = 'status-badge';
                const estatusTextKeyModal = `status_${solicitud.estatusKey}`;
                estadoBadgeInner.textContent = translations[currentLangReg][estatusTextKeyModal] || solicitud.estatusDisplay;
                const statusClassesModal = { nuevas: 'nuevas', enNegociacion: 'en-negociacion', enRevision: 'en-revision', autorizadas: 'autorizada', pendienteFirma: 'pendiente-firma', firmadas: 'firmada', rechazadas: 'incidencias' };
                estadoBadgeInner.classList.add(statusClassesModal[solicitud.estatusKey] || 'status-badge-gray');
                estadoGeneralBadgeModal.appendChild(estadoBadgeInner);
            }


            const diasEtapaChipModal = document.getElementById('modalDetailDiasEnEtapa');
            diasEtapaChipModal.innerHTML = '';
            const diasChipInner = document.createElement('span');
            diasChipInner.className = 'dias-etapa-cell';
            diasChipInner.textContent = solicitud.diasEnEtapa;
            if (solicitud.diasEnEtapa === 0) diasChipInner.classList.add('azul');
            else if (solicitud.diasEnEtapa === 1) diasChipInner.classList.add('verde');
            else if (solicitud.diasEnEtapa === 2) diasChipInner.classList.add('amarillo');
            else if (solicitud.diasEnEtapa === 3) diasChipInner.classList.add('naranja');
            else diasChipInner.classList.add('rojo');
            diasEtapaChipModal.appendChild(diasChipInner);

            lastSavedComment = (solicitud.comentariosInternos && solicitud.comentariosInternos.length > 0) ? solicitud.comentariosInternos[0].comentario : "";
            detailComentariosMC.value = "";
            updateCharCounterMC();
            renderCommentHistory(solicitud.comentariosInternos || []);

            inputComisionTransaccion.value = solicitud.tasas?.comisionTransaccion || '';
            inputComisionTransaccion.disabled = !['enNegociacion'].includes(solicitud.estatusKey);
            guardarTasasButton.disabled = true; // Disabled until a change is made

            generarContratosButton.textContent = (solicitud.contratosGenerados ? translations[currentLangReg].button_regenerar_contratos : translations[currentLangReg].button_generar_contratos) || "Generar Contratos";
            contratosLoadingMessage.classList.add('hidden');
            contratosGeneradosList.classList.toggle('hidden', !solicitud.contratosGenerados);
            if (solicitud.contratosGenerados) renderGeneratedContractsList(contratosGeneradosList.querySelector('ul'));
            generarContratosButton.disabled = !tasasGuardadasParaSolicitudActual;

            updateActionButtonsState(solicitud);

            let tabToActivate = defaultTabId;
            const defaultTabButton = solicitudDetailModalTabsContainer.querySelector(`.modal-tab-button[data-tab="${defaultTabId}"]`);
            const firstVisibleTab = solicitudDetailModalTabsContainer.querySelector('.modal-tab-button:not(.hidden)');

            if (defaultTabButton && !defaultTabButton.classList.contains('hidden')) {
                tabToActivate = defaultTabId;
            } else if (firstVisibleTab) {
                tabToActivate = firstVisibleTab.dataset.tab;
            } else {
                tabToActivate = 'detailTabResumen';
            }
            switchDetailModalTab(tabToActivate, 'solicitudDetailModal');

            solicitudDetailModal.classList.remove('hidden');
            solicitudDetailModal.classList.add('open');
            const firstFocusable = solicitudDetailModal.querySelector('.modal-tab-button.active, button:not(:disabled), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (firstFocusable) firstFocusable.focus();
        }

        function updateActionButtonsState(solicitud) {
            if (!solicitud || !detailAprobarButton || !detailRechazarButton) return;

            let canApprove = false;
            let aprobarButtonTextKey = "detail_action_aprobar_solicitud";
            let showAprobar = false;
            let showRechazar = false;

            detailAprobarButton.classList.remove('primary', 'warning');

            switch (solicitud.estatusKey) {
                case 'nuevas':
                    showAprobar = true;
                    showRechazar = true;
                    aprobarButtonTextKey = "Aprobar y Negociar";
                    canApprove = true;
                    detailAprobarButton.classList.add('primary');
                    break;

                case 'enNegociacion':
                    showAprobar = true;
                    showRechazar = true;
                    aprobarButtonTextKey = "Autorizar Comisión";
                    canApprove = tasasGuardadasParaSolicitudActual;
                    detailAprobarButton.classList.add('primary');
                    break;

                case 'autorizadas':
                    showAprobar = true;
                    showRechazar = true;
                    aprobarButtonTextKey = "Enviar Contratos a Firma";
                    canApprove = contratosGeneradosParaSolicitudActual;
                    detailAprobarButton.classList.add('primary');
                    break;

                case 'rechazadas':
                case 'pendienteFirma':
                case 'firmadas':
                    showAprobar = false;
                    showRechazar = false;
                    break;
                default:
                    showAprobar = false;
                    showRechazar = false;
                    break;
            }

            detailAprobarButton.textContent = aprobarButtonTextKey;
            detailAprobarButton.disabled = !canApprove || unsavedCommentExists;

            detailRechazarButton.disabled = unsavedCommentExists;

            detailAprobarButton.classList.toggle('hidden', !showAprobar);
            detailRechazarButton.classList.toggle('hidden', !showRechazar);
        }

        function renderCommentHistory(comments) {
            const commentHistoryContainerInModal = document.getElementById('commentHistory');
            if (!commentHistoryContainerInModal) return;

            commentHistoryContainerInModal.innerHTML = '';
            if (!comments || comments.length === 0) {
                const noCommentsItem = document.createElement('p');
                noCommentsItem.className = 'text-sm text-gray-500';
                noCommentsItem.textContent = 'No hay comentarios previos.';
                commentHistoryContainerInModal.appendChild(noCommentsItem);
                return;
            }
            comments.forEach(comment => {
                const item = document.createElement('div');
                item.className = 'comment-history-item';
                item.innerHTML = `<span class="user">${comment.usuario}:</span> ${comment.comentario} <span class="date">(${new Date(comment.fecha).toLocaleString('es-MX', { dateStyle: 'short', timeStyle: 'short' })})</span>`;
                commentHistoryContainerInModal.appendChild(item);
            });
        }

        function addCommentToSolicitud(solicitudId, comentarioText) {
            const solicitudIndex = mockSolicitudes.findIndex(s => s.id === solicitudId);
            if (solicitudIndex !== -1 && comentarioText.trim() !== "") {
                if (!mockSolicitudes[solicitudIndex].comentariosInternos) {
                    mockSolicitudes[solicitudIndex].comentariosInternos = [];
                }
                mockSolicitudes[solicitudIndex].comentariosInternos.unshift({
                    usuario: "Alex Pérez",
                    fecha: new Date().toISOString(),
                    comentario: comentarioText.trim()
                });
                lastSavedComment = comentarioText.trim();
                unsavedCommentExists = false;

                const comentariosUnsavedIndicator = document.getElementById('comentariosUnsavedIndicator');
                if(comentariosUnsavedIndicator) comentariosUnsavedIndicator.style.display = 'none';

                updateActionButtonsState(mockSolicitudes[solicitudIndex]);

                if (currentOpenSolicitudId === solicitudId) {
                    renderCommentHistory(mockSolicitudes[solicitudIndex].comentariosInternos);
                }
                return true;
            }
            return false;
        }

        function closeDetailModal() {
            if (solicitudDetailModal) {
                if (unsavedCommentExists && detailComentariosMC.value.trim() !== lastSavedComment) {
                    if (!confirm(translations[currentLangReg].comentario_no_guardado_alerta || "Tiene comentarios sin guardar. ¿Desea cerrar de todas formas?")) {
                        return;
                    }
                }
                solicitudDetailModal.classList.add('hidden');
                solicitudDetailModal.classList.remove('open');
                currentOpenSolicitudId = null;
                unsavedCommentExists = false;
                const comentariosUnsavedIndicator = document.getElementById('comentariosUnsavedIndicator');
                if(comentariosUnsavedIndicator) comentariosUnsavedIndicator.style.display = 'none';
            }
        }

        function updateCharCounter(textareaElement, counterElement) {
            if(textareaElement && counterElement) {
                const currentLength = textareaElement.value.length;
                const maxLength = textareaElement.maxLength;
                counterElement.textContent = `${currentLength}/${maxLength}`;
            }
        }

        function updateCharCounterMC(){
            updateCharCounter(detailComentariosMC, charCounterMC);
            if(detailComentariosMC){
                 unsavedCommentExists = detailComentariosMC.value.trim() !== "" && detailComentariosMC.value.trim() !== lastSavedComment;
                const comentariosUnsavedIndicator = document.getElementById('comentariosUnsavedIndicator');
                if(comentariosUnsavedIndicator) comentariosUnsavedIndicator.style.display = unsavedCommentExists ? 'block' : 'none';

                if(currentOpenSolicitudId){
                    const solicitud = mockSolicitudes.find(s => s.id === currentOpenSolicitudId);
                    if(solicitud) updateActionButtonsState(solicitud);
                }
            }
        }

        function showToast(message, type = 'success') {
            if (!toastMessage) return;
            toastMessage.innerHTML = message;
            toastMessage.className = 'hidden';
            toastMessage.classList.add('show');
            if (type === 'error') toastMessage.classList.add('error');
            else if (type === 'warning') toastMessage.classList.add('warning');
            else toastMessage.style.backgroundColor = '#28a745';

            setTimeout(() => {
                toastMessage.classList.remove('show');
                 setTimeout(() => { toastMessage.classList.add('hidden'); }, 500);
            }, 3000);
        }

        // Event Listeners Setup
        if(hamburgerButton && sidebar) hamburgerButton.addEventListener('click', () => sidebar.classList.toggle('open'));
        if(helpButton && helpModal && closeHelpModal) {
            helpButton.addEventListener('click', () => {
                helpModal.classList.remove('hidden'); helpModal.classList.add('open');
            });
            closeHelpModal.addEventListener('click', () => { helpModal.classList.remove('open'); helpModal.classList.add('hidden'); });
            helpModal.addEventListener('click', (e) => { if (e.target === helpModal) { helpModal.classList.remove('open'); helpModal.classList.add('hidden'); }});
        }

        if(openFaqModalButton) openFaqModalButton.addEventListener('click', (e) => {
            e.preventDefault();
            faqModal.classList.remove('hidden');
            faqModal.classList.add('open');
        });
        if(closeFaqModalButton) closeFaqModalButton.addEventListener('click', () => { faqModal.classList.remove('hidden'); faqModal.classList.remove('open'); });
        if(faqModal) faqModal.addEventListener('click', e => { if (e.target === faqModal) { faqModal.classList.remove('hidden'); faqModal.classList.remove('open'); } });

        modalTabsHelp.forEach(tab => tab.addEventListener('click', () => switchModalTab(tab.dataset.tab, 'helpModal')));

        if(closeSolicitudDetailModalButton) closeSolicitudDetailModalButton.addEventListener('click', closeDetailModal);

        if(detailComentariosMC && charCounterMC) {
            detailComentariosMC.addEventListener('input', updateCharCounterMC);
            detailComentariosMC.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === 'Enter') {
                    e.preventDefault();
                    detailGuardarComentarioButton.click();
                }
            });
        }

        if(detailGuardarComentarioButton){
            detailGuardarComentarioButton.addEventListener('click', () => {
                if (currentOpenSolicitudId) {
                    const comentario = detailComentariosMC.value;
                    if (comentario.trim() === "") {
                        showToast((translations[currentLangReg].alerta_comentario_vacio || "Por favor, ingrese un comentario para guardar."), "warning");
                        return;
                    }
                    if (addCommentToSolicitud(currentOpenSolicitudId, comentario)) {
                        showToast(translations[currentLangReg].comentario_guardado);
                        detailComentariosMC.value = "";
                        updateCharCounterMC();
                    }
                }
            });
        }

        if(detailAprobarButton) {
            detailAprobarButton.addEventListener('click', () => {
                if (currentOpenSolicitudId && !detailAprobarButton.disabled) {
                    const solicitudIndex = mockSolicitudes.findIndex(s => s.id === currentOpenSolicitudId);
                    if (solicitudIndex !== -1) {
                        const solicitud = mockSolicitudes[solicitudIndex];
                        const comentario = detailComentariosMC.value;
                        if (comentario.trim() !== "" && unsavedCommentExists) addCommentToSolicitud(currentOpenSolicitudId, comentario);

                        let toastMsg = "";

                        if (solicitud.estatusKey === 'nuevas') {
                            solicitud.estatusKey = 'enNegociacion';
                            toastMsg = `Solicitud <strong>${currentOpenSolicitudId}</strong> movida a 'En Negociación'.`;
                            addCommentToSolicitud(currentOpenSolicitudId, `ACCIÓN: Solicitud aprobada a negociación.`);
                            showToast(toastMsg, 'success');
                        } else if (solicitud.estatusKey === 'enNegociacion') {
                            solicitud.estatusKey = 'autorizadas';
                            toastMsg = `Comisión de <strong>${currentOpenSolicitudId}</strong> autorizada.`;
                            addCommentToSolicitud(currentOpenSolicitudId, `ACCIÓN: Comisión autorizada.`);
                            showToast(toastMsg, 'success');
                        } else if (solicitud.estatusKey === 'autorizadas') {
                            solicitud.estatusKey = 'pendienteFirma';
                            toastMsg = `Contratos de <strong>${currentOpenSolicitudId}</strong> enviados a firma.`;
                            addCommentToSolicitud(currentOpenSolicitudId, `ACCIÓN: Contratos enviados al cliente.`);
                             showToast(toastMsg, 'success');
                        }

                        solicitud.estatusDisplay = translations[currentLangReg][`status_${solicitud.estatusKey}`] || solicitud.estatusKey;
                        solicitud.diasEnEtapa = 0;
                        closeDetailModal();
                        const activeStatusFilter = document.querySelector('.status-tab-button.active');
                        renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas', globalSearchInput.value);
                    }
                }
            });
        }

        // Rejection Modal Logic
        if (detailRechazarButton) {
            detailRechazarButton.addEventListener('click', () => {
                if (currentOpenSolicitudId && !detailRechazarButton.disabled) {
                    rejectionReasonText.value = '';
                    rejectionReasonSelect.value = '';
                    updateCharCounter(rejectionReasonText, rejectionCharCounter);
                    rejectionReasonModal.classList.remove('hidden');
                    rejectionReasonModal.classList.add('open');
                    rejectionReasonSelect.focus();
                }
            });
        }

        if (confirmRejectionButton) {
            confirmRejectionButton.addEventListener('click', () => {
                const motivoSelect = rejectionReasonSelect.value;
                const motivoText = rejectionReasonText.value.trim();
                if (!motivoSelect) {
                    showToast(translations[currentLangReg].alerta_motivo_vacio || "Debe seleccionar un motivo de rechazo.", 'warning');
                    return;
                }
                const motivoFinal = motivoSelect === 'Otro' ? motivoText : motivoSelect;
                if (!motivoFinal) {
                     showToast("Por favor, especifique el motivo en el campo de texto.", 'warning');
                     return;
                }

                const comentarioRechazo = `RECHAZO: ${motivoFinal}`;
                if (detailComentariosMC.value.trim() === "" || detailComentariosMC.value.trim() === lastSavedComment) {
                     addCommentToSolicitud(currentOpenSolicitudId, comentarioRechazo);
                } else {
                    addCommentToSolicitud(currentOpenSolicitudId, detailComentariosMC.value.trim());
                    addCommentToSolicitud(currentOpenSolicitudId, comentarioRechazo);
                }

                const solicitudIndex = mockSolicitudes.findIndex(s => s.id === currentOpenSolicitudId);
                if (solicitudIndex !== -1) {
                    mockSolicitudes[solicitudIndex].estatusKey = 'rechazadas';
                    mockSolicitudes[solicitudIndex].estatusDisplay = translations[currentLangReg].status_rechazada;
                    mockSolicitudes[solicitudIndex].motivoRechazo = motivoFinal;
                    mockSolicitudes[solicitudIndex].diasEnEtapa = 0;
                    showToast(translations[currentLangReg].toast_solicitud_rechazada.replace('{id}', `<strong>${currentOpenSolicitudId}</strong>`), 'warning');

                    rejectionReasonModal.classList.add('hidden');
                    rejectionReasonModal.classList.remove('open');
                    closeDetailModal();

                    const activeStatusFilter = document.querySelector('.status-tab-button.active');
                    renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas', globalSearchInput.value);
                }
            });
        }
        if(rejectionReasonText) rejectionReasonText.addEventListener('input', () => updateCharCounter(rejectionReasonText, rejectionCharCounter));
        if(cancelRejectionButton) cancelRejectionButton.addEventListener('click', () => { rejectionReasonModal.classList.add('hidden'); rejectionReasonModal.classList.remove('open'); });
        if(closeRejectionModalButton) closeRejectionModalButton.addEventListener('click', () => { rejectionReasonModal.classList.add('hidden'); rejectionReasonModal.classList.remove('open'); });


        solicitudDetailModalTabsContainer.addEventListener('click', (event) => {
            const tabButton = event.target.closest('.modal-tab-button');
            if (tabButton && !tabButton.classList.contains('hidden')) {
                 if (tabButton.dataset.tab === 'detailTabAnalisisIA') {
                    analisisIATabVisited = true;
                    const solicitud = mockSolicitudes.find(s => s.id === currentOpenSolicitudId);
                    updateActionButtonsState(solicitud);
                }
                switchDetailModalTab(tabButton.dataset.tab, 'solicitudDetailModal');
            }
        });


        function switchDetailModalTab(tabId, modalId) {
            const currentModal = document.getElementById(modalId);
            if (!currentModal) return;

            const tabContentSelector = modalId === 'solicitudDetailModal' ? '.detail-tab-content' : '.tab-content';
            currentModal.querySelectorAll(tabContentSelector).forEach(content => {
                content.classList.toggle('active', content.id === tabId);
                content.classList.toggle('hidden', content.id !== tabId);
            });
            currentModal.querySelectorAll('.modal-tab-button').forEach(button => {
                if(!button.classList.contains('hidden')) {
                    button.classList.toggle('active', button.dataset.tab === tabId);
                }
            });
        }

        solicitudesTableHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const sortKey = header.dataset.sortKey;
                if (!sortKey) return;
                if (currentSortKey === sortKey) currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
                else { currentSortKey = sortKey; currentSortDirection = 'asc';}
                const activeFilter = document.querySelector('.status-tab-button.active');
                renderSolicitudesTable(activeFilter ? activeFilter.dataset.statusFilter : 'todas', globalSearchInput.value);
            });
        });

        if (statusTabsContainer) {
            statusTabsContainer.addEventListener('click', (event) => {
                const tabButton = event.target.closest('.status-tab-button');
                if (tabButton) {
                    statusTabsContainer.querySelectorAll('.status-tab-button').forEach(btn => btn.classList.remove('active'));
                    tabButton.classList.add('active');
                    const filter = tabButton.dataset.statusFilter;
                    currentPage = 1;
                    if (filter === 'todas') {
                        currentSortKey = 'fecha';
                        currentSortDirection = 'desc';
                    } else if (filter === 'enNegociacion' || filter === 'rechazadas') {
                        currentSortKey = 'diasEnEtapa';
                        currentSortDirection = 'desc';
                    } else {
                        currentSortKey = 'fecha';
                        currentSortDirection = 'desc';
                    }
                    renderSolicitudesTable(filter, globalSearchInput.value);
                }
            });
        }

        // Date Filter Logic
        function toggleApplyDateFilterButton() {
            applyDateFilterButton.disabled = !(dateFromInput.value && dateToInput.value);
        }
        if (dateFromInput) dateFromInput.addEventListener('change', toggleApplyDateFilterButton);
        if (dateToInput) dateToInput.addEventListener('change', toggleApplyDateFilterButton);

        if (applyDateFilterButton) {
            applyDateFilterButton.addEventListener('click', () => {
                if (applyDateFilterButton.disabled) return;
                currentFilterDateFrom = dateFromInput.value;
                currentFilterDateTo = dateToInput.value;
                clearDateFilterButton.classList.toggle('hidden', !(currentFilterDateFrom && currentFilterDateTo));
                currentPage = 1;
                const activeStatusFilter = document.querySelector('.status-tab-button.active');
                renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas', globalSearchInput.value);
            });
        }

        if (clearDateFilterButton) {
            clearDateFilterButton.addEventListener('click', () => {
                dateFromInput.value = ''; dateToInput.value = '';
                currentFilterDateFrom = null; currentFilterDateTo = null;
                clearDateFilterButton.classList.add('hidden');
                applyDateFilterButton.disabled = true;
                currentPage = 1;
                const activeStatusFilter = document.querySelector('.status-tab-button.active');
                renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas', globalSearchInput.value);
            });
        }

        if (notificationButton && notificationDropdown) {
            notificationDropdown.addEventListener('click', (e) => {
                const item = e.target.closest('.notification-item');
                if (item && item.dataset.solicitudId) {
                    e.stopPropagation();
                    notificationDropdown.classList.remove('open');
                    notificationDropdown.classList.add('hidden');
                    const tab = item.dataset.action === 'ir-incidencias' ? 'detailTabAnalisisIA' : 'detailTabResumen';
                    openSolicitudDetailModal(item.dataset.solicitudId, tab);
                }
            });

            notificationButton.addEventListener('click', (e) => {
                e.stopPropagation();
                notificationDropdown.classList.toggle('open'); notificationDropdown.classList.toggle('hidden');
                if (userDropdown && userDropdown.classList.contains('open')) { userDropdown.classList.remove('open'); userDropdown.classList.add('hidden'); }
            });
        }
        if (userMenuButton && userDropdown) {
            userMenuButton.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdown.classList.toggle('open'); userDropdown.classList.toggle('hidden');
                if (notificationDropdown && notificationDropdown.classList.contains('open')) { notificationDropdown.classList.remove('open'); notificationDropdown.classList.add('hidden');}
            });
        }

        document.addEventListener('click', (e) => {
            if (notificationDropdown && notificationButton && !notificationButton.contains(e.target) && !notificationDropdown.contains(e.target)) {
                notificationDropdown.classList.remove('open'); notificationDropdown.classList.add('hidden');
            }
            if (userDropdown && userMenuButton && !userMenuButton.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('open'); userDropdown.classList.add('hidden');
            }
            if (solicitudDetailModal && solicitudDetailModal.classList.contains('open') && e.target === solicitudDetailModal) {
                closeDetailModal();
            }
            if (rejectionReasonModal && rejectionReasonModal.classList.contains('open') && e.target === rejectionReasonModal) {
                 rejectionReasonModal.classList.add('hidden'); rejectionReasonModal.classList.remove('open');
            }
             if (faqModal && faqModal.classList.contains('open') && e.target === faqModal) {
                 faqModal.classList.add('hidden'); faqModal.classList.remove('open');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (rejectionReasonModal && rejectionReasonModal.classList.contains('open')) {
                     rejectionReasonModal.classList.add('hidden'); rejectionReasonModal.classList.remove('open');
                } else if (solicitudDetailModal && solicitudDetailModal.classList.contains('open')) {
                    closeDetailModal();
                } else if (helpModal && helpModal.classList.contains('open')) {
                    helpModal.classList.remove('open'); helpModal.classList.add('hidden');
                } else if (document.activeElement === dateFromInput || document.activeElement === dateToInput) {
                    if (!clearDateFilterButton.classList.contains('hidden')) {
                        clearDateFilterButton.click();
                    }
                }
            }
            if (e.key === '/' && !(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
                e.preventDefault();
                if(globalSearchInput) globalSearchInput.focus();
            }
            if (e.key === 'F1') {
                e.preventDefault();
                helpButton.click();
            }
            if (solicitudDetailModal && solicitudDetailModal.classList.contains('open') && !rejectionReasonModal.classList.contains('open')) {
                if (e.ctrlKey && e.key === 'Enter') {
                    if(document.activeElement === detailComentariosMC && !detailGuardarComentarioButton.disabled){
                        e.preventDefault();
                        detailGuardarComentarioButton.click();
                    } else if (!detailAprobarButton.disabled) {
                         e.preventDefault();
                        detailAprobarButton.click();
                    }
                }
                 if((e.ctrlKey || e.metaKey) && e.key === 's') {
                    const activeTab = solicitudDetailModalTabsContainer.querySelector('.modal-tab-button.active');
                    if (activeTab && activeTab.dataset.tab === 'detailTabTasas') {
                        e.preventDefault();
                        if(!guardarTasasButton.disabled) guardarTasasButton.click();
                    }
                }
                const visibleTabs = Array.from(solicitudDetailModalTabsContainer.querySelectorAll('.modal-tab-button:not(.hidden)'));
                const currentActiveTabButton = visibleTabs.find(tab => tab.classList.contains('active'));
                let currentTabIndex = visibleTabs.indexOf(currentActiveTabButton);

                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    if(visibleTabs.length > 0) {
                        currentTabIndex = (currentTabIndex + 1) % visibleTabs.length;
                        visibleTabs[currentTabIndex].click();
                    }
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                     if(visibleTabs.length > 0) {
                        currentTabIndex = (currentTabIndex - 1 + visibleTabs.length) % visibleTabs.length;
                        visibleTabs[currentTabIndex].click();
                    }
                }
            } else if (helpModal && helpModal.classList.contains('open')) {
                 const currentActiveTabButtonHelp = helpModal.querySelector('.modal-tab-button.active');
                 let currentTabIndexHelp = Array.from(modalTabsHelp).indexOf(currentActiveTabButtonHelp);
                 if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    currentTabIndexHelp = (currentTabIndexHelp + 1) % modalTabsHelp.length;
                    modalTabsHelp[currentTabIndexHelp].click();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    currentTabIndexHelp = (currentTabIndexHelp - 1 + modalTabsHelp.length) % modalTabsHelp.length;
                    modalTabsHelp[currentTabIndexHelp].click();
                }
            }
        });

        function translatePage(lang) {
            currentLangReg = lang;
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                let textToSet = (translations[lang]?.[key]) || (translations['es']?.[key]) || el.textContent;
                const isButton = el.tagName === 'BUTTON' || (el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'button'));

                if (isButton && el.classList.contains('status-tab-button')) {
                    const countSpan = el.querySelector('.status-tab-count');
                    el.innerHTML = textToSet + (countSpan && el.dataset.statusFilter !== 'todas' ? ` ${countSpan.outerHTML}` : '');
                } else if (isButton) {
                    const textSpan = el.querySelector('span[data-translate]');
                    if (textSpan?.dataset.translate === key) textSpan.textContent = textToSet;
                    else if (el.childNodes.length === 1 && el.firstChild.nodeType === Node.TEXT_NODE) el.firstChild.textContent = textToSet;
                    else el.childNodes.forEach(child => { if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') child.textContent = textToSet; });
                } else if (!el.classList.contains('sort-indicator')) {
                     el.textContent = textToSet;
                }
            });
            const activeFilter = document.querySelector('.status-tab-button.active');
            renderSolicitudesTable(activeFilter ? activeFilter.dataset.statusFilter : 'todas', globalSearchInput.value);
        }

        const floatingHelpBtn = document.getElementById('floatingHelpButton');
        const helpButtonTextSpan = floatingHelpBtn ? floatingHelpBtn.querySelector('span') : null;
        let helpButtonTimeout;
        let helpButtonExpandedManually = false;

        function expandHelpButton() {
            if (helpButtonExpandedManually || !floatingHelpBtn || !helpButtonTextSpan) return;
            floatingHelpBtn.classList.add('expanded');
            if(helpButtonTextSpan) helpButtonTextSpan.classList.remove('hidden');
            if (helpButtonTimeout) clearTimeout(helpButtonTimeout);
            helpButtonTimeout = setTimeout(() => {
                if (helpButtonExpandedManually) return;
                floatingHelpBtn.classList.remove('expanded');
                if(helpButtonTextSpan) helpButtonTextSpan.classList.add('hidden');
            }, 7000);
        }

        if (floatingHelpBtn) {
            setTimeout(expandHelpButton, 2000);
            floatingHelpBtn.addEventListener('mouseenter', () => {
                if (helpButtonTimeout) clearTimeout(helpButtonTimeout);
                floatingHelpBtn.classList.add('expanded');
                if(helpButtonTextSpan) helpButtonTextSpan.classList.remove('hidden');
                helpButtonExpandedManually = true;
            });
            floatingHelpBtn.addEventListener('mouseleave', () => {
                if (helpModal && !helpModal.classList.contains('open') && solicitudDetailModal && !solicitudDetailModal.classList.contains('open')) {
                     helpButtonTimeout = setTimeout(() => {
                        floatingHelpBtn.classList.remove('expanded');
                        if(helpButtonTextSpan) helpButtonTextSpan.classList.add('hidden');
                        helpButtonExpandedManually = false;
                    }, 1000);
                }
            });
             floatingHelpBtn.addEventListener('click', () => {
                if (helpButtonTimeout) clearTimeout(helpButtonTimeout);
                helpButtonExpandedManually = true;
                floatingHelpBtn.classList.add('expanded');
                if(helpButtonTextSpan) helpButtonTextSpan.classList.remove('hidden');
            });
        }

        if(closeHelpModal) {
            closeHelpModal.addEventListener('click', () => {
                helpButtonExpandedManually = false;
                if (floatingHelpBtn && !floatingHelpBtn.matches(':hover')) floatingHelpBtn.dispatchEvent(new MouseEvent('mouseleave'));
            });
        }
        if(helpModal) {
             helpModal.addEventListener('click', (event) => {
                if (event.target === helpModal && event.target.id === 'helpModal') {
                    helpButtonExpandedManually = false;
                    if (floatingHelpBtn && !floatingHelpBtn.matches(':hover')) floatingHelpBtn.dispatchEvent(new MouseEvent('mouseleave'));
                }
            });
        }

        // Tasas y Comisiones Logic
        if(guardarTasasButton) {
            guardarTasasButton.addEventListener('click', () => {
                if (currentOpenSolicitudId) {
                    const solicitudIndex = mockSolicitudes.findIndex(s => s.id === currentOpenSolicitudId);
                    if (solicitudIndex !== -1) {
                        mockSolicitudes[solicitudIndex].tasas = {
                            comisionTransaccion: inputComisionTransaccion.value,
                        };
                        mockSolicitudes[solicitudIndex].tasasGuardadas = true;
                        tasasGuardadasParaSolicitudActual = true;
                        showToast(translations[currentLangReg].tasas_guardadas_exito || "Tasas guardadas.");
                        updateActionButtonsState(mockSolicitudes[solicitudIndex]);
                    }
                }
            });
        }
        if (inputComisionTransaccion) {
            inputComisionTransaccion.addEventListener('input', () => {
                guardarTasasButton.disabled = false;
            });
            inputComisionTransaccion.addEventListener('blur', (e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                    e.target.value = value.toFixed(2);
                }
            });
        }

        // Contratos Logic
        if (generarContratosButton) {
            generarContratosButton.addEventListener('click', () => {
                if (currentOpenSolicitudId) {
                    const solicitudIndex = mockSolicitudes.findIndex(s => s.id === currentOpenSolicitudId);
                    if (solicitudIndex !== -1) {
                        generarContratosButton.classList.add('hidden');
                        contratosLoadingMessage.classList.remove('hidden');
                        contratosGeneradosList.classList.add('hidden');
                        contratosGeneradosList.querySelector('ul').innerHTML = '';

                        let progress = 20;
                        contratoProgressCounter.textContent = `${progress}%`;
                        const interval = setInterval(() => {
                            progress += Math.floor(Math.random() * 10) + 5;
                            if (progress >= 100) {
                                progress = 100;
                                clearInterval(interval);
                                setTimeout(() => { // Finalize
                                    contratosLoadingMessage.classList.add('hidden');
                                     renderGeneratedContractsList(contratosGeneradosList.querySelector('ul'));
                                    contratosGeneradosList.classList.remove('hidden');
                                    mockSolicitudes[solicitudIndex].contratosGenerados = true;
                                    contratosGeneradosParaSolicitudActual = true;
                                    showToast(translations[currentLangReg].contratos_generados_toast || "Contratos generados.");
                                    updateActionButtonsState(mockSolicitudes[solicitudIndex]);
                                }, 300);
                            }
                            contratoProgressCounter.textContent = `${progress}%`;
                        }, 250);
                    }
                }
            });
        }

        function renderGeneratedContractsList(ulElement) {
            if(!ulElement) return;
            ulElement.innerHTML = ''; // Clear list
            const contratos = [
                { key: 'contrato_general', nombre: 'Contrato General.pdf' },
                { key: 'contrato_anexo_a', nombre: 'Anexo A - Comisiones.pdf' },
                { key: 'contrato_anexo_b', nombre: 'Anexo B - Términos TPV.pdf' }
            ];
            contratos.forEach(contrato => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#view-contrato-${contrato.nombre.replace(/\s/g, '-')}`;
                link.textContent = translations[currentLangReg][contrato.key] || contrato.nombre;
                link.classList.add('text-sky-600', 'hover:underline');
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert(`Simulando vista del contrato: ${contrato.nombre}`);
                });
                li.appendChild(link);
                ulElement.appendChild(li);
            });
        }

        // Global Search Listener
        if (globalSearchInput) {
            globalSearchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value;
                currentPage = 1;
                const activeStatusFilter = document.querySelector('.status-tab-button.active');
                renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas', searchTerm);
            });
        }

        // Pagination Listeners
        if(prevPageButton) prevPageButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                const activeStatusFilter = document.querySelector('.status-tab-button.active');
                renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas', globalSearchInput.value);
            }
        });
        if(nextPageButton) nextPageButton.addEventListener('click', () => {
            let dataForTotalPages = [...mockSolicitudes];
            const searchTerm = globalSearchInput.value.toLowerCase();
            if (currentFilterDateFrom && currentFilterDateTo) {
                const from = new Date(currentFilterDateFrom).getTime();
                const to = new Date(currentFilterDateTo).getTime();
                dataForTotalPages = dataForTotalPages.filter(s => new Date(s.fecha).getTime() >= from && new Date(s.fecha).getTime() <= to);
            }
            if (searchTerm) {
                dataForTotalPages = dataForTotalPages.filter(s =>
                    s.nombre.toLowerCase().includes(searchTerm) ||
                    s.id.toLowerCase().includes(searchTerm) ||
                    (s.rfc && s.rfc.toLowerCase().includes(searchTerm))
                );
            }
            const activeFilter = document.querySelector('.status-tab-button.active');
            if (activeFilter && activeFilter.dataset.statusFilter !== 'todas') {
                dataForTotalPages = dataForTotalPages.filter(s => s.estatusKey === activeFilter.dataset.statusFilter);
            }
            const totalPages = Math.ceil(dataForTotalPages.length / ITEMS_PER_PAGE);

            if (currentPage < totalPages) {
                currentPage++;
                renderSolicitudesTable(activeFilter ? activeStatusFilter.dataset.statusFilter : 'todas', globalSearchInput.value);
            }
        });


        document.addEventListener('DOMContentLoaded', () => {
            translatePage(currentLangReg);
            currentSortKey = 'fecha';
            currentSortDirection = 'desc';
            const initialActiveTab = statusTabsContainer ? statusTabsContainer.querySelector('.status-tab-button.active') : null;
            showSkeletonRows();
            setTimeout(() => {
                 renderSolicitudesTable(initialActiveTab ? initialActiveTab.dataset.statusFilter : 'todas', globalSearchInput.value);
            }, 500);
            toggleApplyDateFilterButton();
        });
