// DOM Element References
        const sidebar = document.getElementById('sidebar');
        const hamburgerButton = document.getElementById('hamburgerButton');
        const helpButton = document.getElementById('floatingHelpButton');
        const helpModal = document.getElementById('helpModal');
        const closeHelpModal = document.getElementById('closeHelpModal');
        const notificationButton = document.getElementById('notificationButton');
        const notificationDropdown = document.getElementById('notificationDropdown');
        const userMenuButton = document.getElementById('userMenuButton');
        const userDropdown = document.getElementById('userDropdown');
        const modalTabs = document.querySelectorAll('#helpModal .modal-tab-button');
        const tabContents = document.querySelectorAll('#helpModal .tab-content');
        const statusTabsContainer = document.getElementById('statusTabsContainer');
        const solicitudesTableBody = document.getElementById('solicitudesTableBody');
        const solicitudesTableHeaders = document.querySelectorAll('.solicitudes-table th[data-sort-key]');
        const noResultsMessage = document.getElementById('noResultsMessage');
        const dateFromInput = document.getElementById('dateFrom');
        const dateToInput = document.getElementById('dateTo');
        const applyDateFilterButton = document.getElementById('applyDateFilter');
        const clearDateFilterButton = document.getElementById('clearDateFilter');
        const toastMessage = document.getElementById('toastMessage');

        // Solicitud Detail Modal Elements
        const solicitudDetailModal = document.getElementById('solicitudDetailModal');
        const closeSolicitudDetailModalButton = document.getElementById('closeSolicitudDetailModal');
        const solicitudDetailModalTitle = document.getElementById('solicitudDetailModalTitle');
        const solicitudDetailModalTabs = document.querySelectorAll('#solicitudDetailModal .modal-tab-button');
        const solicitudDetailTabContents = document.querySelectorAll('#solicitudDetailModal .detail-tab-content');
        const detailCerrarModalButton = document.getElementById('detailCerrarModalButton');
        const detailAprobarButton = document.getElementById('detailAprobarButton');
        const detailRechazarButton = document.getElementById('detailRechazarButton');
        const detailComentariosMC = document.getElementById('detailComentariosMC');
        const charCounterMC = document.getElementById('charCounterMC');
        const commentHistoryContainer = document.getElementById('commentHistory');
        const detailGuardarComentarioButton = document.getElementById('detailGuardarComentarioButton');


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
                tab_contact: "Contacto",
                tab_faq: "Preguntas Frecuentes (Generales)",
                modal_whatsapp_label: "Whatsapp:",
                modal_phone_label: "Vía Telefónica:",
                modal_email_label: "Correo Electrónico:",
                faq_general1_q: "¿Cómo actualizo mis datos personales?",
                faq_general1_a: "Puedes actualizar tus datos personales desde la sección "Perfil" en el menú de usuario.",
                faq_general2_q: "¿Qué hago si olvidé mi contraseña?",
                faq_general2_a: "En la pantalla de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?" y sigue las instrucciones.",
                faq4_q: "¿Es seguro usar Espiralapp?",
                faq4_a: "Sí, en Espiralapp utilizamos los más altos estándares de seguridad para proteger tu información y tus transacciones.",
                faq5_q: "¿Dónde puedo cambiar mi contraseña?",
                faq5_a: "Puedes cambiar tu contraseña desde la sección de 'Configuración' en tu perfil de usuario.",
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
                date_filter_clear: "Limpiar Filtro",
                status_tab_all: "Todas",
                status_tab_new: "Nuevas",
                status_tab_in_negotiation: "En Negociación",
                status_tab_authorized: "Autorizadas",
                status_tab_pending_signature: "Pendiente Firma",
                status_tab_signed: "Firmadas",
                table_header_id: "ID Solicitud",
                table_header_date: "Fecha Solicitud",
                table_header_name: "Nombre Comercio",
                table_header_type: "Tipo Persona",
                table_header_status: "Estado", // Added for consistency
                table_header_etapa: "Etapa",
                table_header_dias_etapa: "Días en Etapa",
                table_header_dias_proceso: "Días de Proceso",
                action_view_details_icon_title: "Ver Detalles de Solicitud",
                ia_status_ok: "Docs OK",
                ia_status_issues: "Incidencias",
                ia_status_pending: "Pendiente",
                status_nuevas: "Nueva",
                status_enNegociacion: "En Negociación",
                status_autorizadas: "Autorizada",
                status_pendienteFirma: "Pendiente Firma",
                status_firmadas: "Firmada",
                status_rechazada: "Rechazada",
                no_solicitudes_message: "No hay solicitudes que coincidan con el filtro seleccionado.",
                detail_tab_resumen_ux: "Resumen",
                detail_tab_analisis_ia: "Análisis IA",
                detail_section_title_resumen_solicitud: "Resumen de la Solicitud",
                detail_label_id: "ID Solicitud:",
                detail_label_fecha_sol: "Fecha Solicitud:",
                detail_label_nombre_comercio: "Nombre Comercio:",
                detail_label_tipo_persona: "Tipo Persona:",
                detail_label_estado_general: "Estado General:",
                detail_label_dias_proceso: "Días de Proceso:",
                detail_label_dias_etapa: "Días en Etapa:",
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
                detail_label_pagina_web: "Página Web (opcional):",
                detail_label_red_social: "Red Social con mayor impacto (opcional):",
                detail_section_title_documentos: "Documentos Adjuntos",
                detail_section_title_verif_ia_global: "Resultado General",
                doc_name_ine: "INE/Identificación Oficial",
                doc_name_csf_pf: "Constancia de Situación Fiscal (Persona Física)",
                doc_name_csf_pm: "Constancia de Situación Fiscal (Persona Moral)",
                doc_name_comp_dom: "Comprobante de Domicilio",
                doc_name_fotos_dom: "Fotografías del Domicilio",
                doc_name_fotos_act: "Fotografías Actividad Económica",
                doc_name_acta_const: "Acta Constitutiva",
                doc_name_reg_pub: "Registro Público de la Propiedad",
                doc_name_organigrama: "Organigrama",
                doc_name_fiel: "FIEL Activa (Vigencia y Acuse)",
                doc_action_ver: "Ver Archivo",
                doc_status_ok: "OK",
                doc_status_incidencia: "Incidencia",
                doc_status_pendiente: "Pendiente",
                doc_incidencia_ine_vencida: "INE no vigente o ilegible.",
                doc_incidencia_csf_antigua: "CSF con antigüedad mayor a 90 días.",
                doc_incidencia_dom_antiguo: "Comprobante de domicilio con antigüedad mayor a 90 días.",
                doc_incidencia_fotos_no_claras: "Fotografías no claras, incompletas o no corresponden.",
                doc_incidencia_acta_incompleta: "Acta constitutiva ilegible o incompleta.",
                doc_incidencia_fiel_no_valida: "FIEL no vigente o acuse incorrecto.",
                detail_label_estado_verif: "Estado Verificación:",
                detail_label_fecha_verif: "Fecha/Hora Verificación:",
                detail_label_obs_verif: "Observaciones de Verificación:",
                verif_status_ok: "Verificó y Verificable",
                verif_status_no_verificable: "No Verificable",
                verif_status_parcial: "Verificación Parcial con Observaciones",
                detail_section_title_comentarios_mc: "Comentarios Internos",
                detail_action_guardar_comentario: "Guardar Comentario",
                detail_action_aprobar_solicitud: "Aprobar Solicitud",
                detail_action_rechazar_solicitud: "Rechazar Solicitud",
                detail_action_cerrar: "Cerrar",
                toast_solicitud_aprobada: "Solicitud <strong>{id}</strong> aprobada y movida a 'En Proceso'.",
                toast_solicitud_rechazada: "Solicitud <strong>{id}</strong> ha sido marcada como 'Rechazada'.",
                comentario_guardado: "Comentario guardado.",
                alerta_comentario_rechazo: "Por favor, ingrese un comentario explicando el motivo del rechazo.",
            },
        };
        let currentLangReg = 'es';

        // State for sorting and filtering
        let currentSortKey = 'fecha';
        let currentSortDirection = 'desc';
        let currentFilterDateFrom = null;
        let currentFilterDateTo = null;
        let currentOpenSolicitudId = null;

        // Evita excepciones si falta un ID en el DOM
        function safeSetText(id, txt) {
          const el = document.getElementById(id);
          if (el) el.textContent = txt;
        }

        // Mock Data for Solicitudes
        let mockSolicitudes = [
            {
                id: "100006", fecha: "2024-07-30", nombre: "Abarrotes Don Pepe", tipoPersona: "Persona Física",
                iaDocs: "OK", iaIncidencias: 0, estatusKey: "nuevas", estatusDisplay: "Nueva", diasEnEtapa: 1, diasTotales: 1,
                rfc: "PEPJ700707J07", giro: "Tienda de Abarrotes", anoFundacion: 2005, numEmpleados: "1-5", ventasAnuales: "Menos de $500,000", ticketPromedio: 80,
                ventasLinea: "No", plataformasOnline: "", sucursalesFisicas: "Sí", cantidadSucursales: 1, paginaWeb: "", redSocial: "https://facebook.com/donpepe",
                documentos: [
                    { nombreKey: "doc_name_ine", archivo: "ine_100003.pdf", estadoIA: "OK", incidencia: "", fileSize: "1.2MB", fileDate: "2024-07-30" },
                    { nombreKey: "doc_name_csf_pf", archivo: "csf_100003.pdf", estadoIA: "OK", incidencia: "", fileSize: "800KB", fileDate: "2024-07-30" },
                ],
                verificacionGub: { estado: "OK", observaciones: "Todos los datos coinciden con registros gubernamentales.", fecha: "2024-07-30 14:00"},
                comentariosInternos: [
                     { usuario: "Alex Pérez", fecha: "2024-07-30 14:05", comentario: "Cliente contactado, parece todo en orden."}
                ]
            },
            {
                id: "100005", fecha: "2024-07-29", nombre: "Servicios Digitales Rápidos", tipoPersona: "Persona Física",
                iaDocs: "OK", iaIncidencias: 0, estatusKey: "enNegociacion", estatusDisplay: "En Negociación", diasEnEtapa: 1, diasTotales: 2,
                rfc: "SDR990909SDR", giro: "Servicios Digitales", anoFundacion: 2022, numEmpleados: "1-5", ventasAnuales: "Menos de $500,000", ticketPromedio: 1200,
                ventasLinea: "Sí", plataformasOnline: "Propia", sucursalesFisicas: "No", cantidadSucursales: 0, paginaWeb: "https://sdr.com.mx", redSocial: "",
                documentos: [{ nombreKey: "doc_name_ine", archivo: "ine_100005.pdf", estadoIA: "OK", incidencia: "", fileSize: "1.0MB", fileDate: "2024-07-29" }],
                verificacionGub: { estado: "OK", observaciones: "Verificado.", fecha: "2024-07-29 12:00"},
                comentariosInternos: []
            },
             {
                id: "100004", fecha: "2024-07-28", nombre: "Consultoría Integral XYZ", tipoPersona: "Persona Moral",
                iaDocs: "OK", iaIncidencias: 0, estatusKey: "autorizadas", estatusDisplay: "Autorizada", diasEnEtapa: 3, diasTotales: 5,
                rfc: "CIX101112ABC", giro: "Servicios Profesionales", anoFundacion: 2010, numEmpleados: "20-50", ventasAnuales: "Más de $5,000,000", ticketPromedio: 25000,
                ventasLinea: "No", plataformasOnline: "", sucursalesFisicas: "Sí", cantidadSucursales: 3, paginaWeb: "https://consultoriaxyz.com", redSocial: "",
                documentos: [ { nombreKey: "doc_name_acta_const", archivo: "acta_100004.pdf", estadoIA: "OK", incidencia: "", fileSize: "3.5MB", fileDate: "2024-07-28" } ],
                verificacionGub: { estado: "OK", observaciones: "Toda la información verificada y consistente.", fecha: "2024-07-28 09:00"},
                comentariosInternos: []
            },
            {
                id: "100003", fecha: "2024-07-27", nombre: "TecnoSoluciones Avanzadas", tipoPersona: "Persona Moral",
                iaDocs: "OK", iaIncidencias: 0, estatusKey: "pendienteFirma", estatusDisplay: "Pendiente Firma", diasEnEtapa: 2, diasTotales: 4,
                rfc: "TSA010203YY2", giro: "Tecnología y Software", anoFundacion: 2015, numEmpleados: "10-20", ventasAnuales: "$1,000,000 - $5,000,000", ticketPromedio: 5000,
                ventasLinea: "Sí", plataformasOnline: "Shopify, Amazon", sucursalesFisicas: "No", cantidadSucursales: 0, paginaWeb: "https://tecnosol.mx", redSocial: "https://linkedin.com/company/tecnosol",
                documentos: [ { nombreKey: "doc_name_acta_const", archivo: "acta_100003.pdf", estadoIA: "OK", incidencia: "", fileSize: "2.5MB", fileDate: "2024-07-27" }],
                verificacionGub: { estado: "OK", observaciones: "Verificado.", fecha: "2024-07-27 15:00"},
                comentariosInternos: []
            },
            {
                id: "100002", fecha: "2024-07-26", nombre: "Restaurante La Delicia", tipoPersona: "Persona Moral",
                iaDocs: "OK", iaIncidencias: 0, estatusKey: "firmadas", estatusDisplay: "Firmada", diasEnEtapa: 0, diasTotales: 6,
                rfc: "RLD050505D05", giro: "Restaurantes", anoFundacion: 2005, numEmpleados: "10-20", ventasAnuales: "$1,000,000 - $5,000,000", ticketPromedio: 350,
                ventasLinea: "No", plataformasOnline: "", sucursalesFisicas: "Sí", cantidadSucursales: 1, paginaWeb: "", redSocial: "https://facebook.com/ladelicia",
                documentos: [ { nombreKey: "doc_name_acta_const", archivo: "acta_100002.pdf", estadoIA: "OK", incidencia: "", fileSize: "3.0MB", fileDate: "2024-07-26" } ],
                verificacionGub: { estado: "OK", observaciones: "Verificado.", fecha: "2024-07-26 11:00"},
                comentariosInternos: []
            },
            {
                id: "100001", fecha: "2024-07-25", nombre: "Cafetería El Buen Sabor", tipoPersona: "Persona Física",
                iaDocs: "Incidencias", iaIncidencias: 1, estatusKey: "rechazada", estatusDisplay: "Rechazada", diasEnEtapa: 0, diasTotales: 2,
                rfc: "PEAJ800101XX1", giro: "Alimentos y Bebidas", anoFundacion: 2018, numEmpleados: "1-5", ventasAnuales: "Menos de $500,000", ticketPromedio: 150,
                ventasLinea: "No", plataformasOnline: "", sucursalesFisicas: "Sí", cantidadSucursales: 1, paginaWeb: "https://cafebs.com", redSocial: "https://instagram.com/cafebs",
                documentos: [ { nombreKey: "doc_name_ine", archivo: "ine_100001.pdf", estadoIA: "Incidencia", incidenciaKey: "doc_incidencia_ine_vencida", fileSize: "1.0MB", fileDate: "2024-07-25" } ],
                verificacionGub: { estado: "Pendiente", observaciones: "Identificación no vigente.", fecha: "2024-07-25 10:30"},
                comentariosInternos: [{usuario: "Alex Pérez", fecha: "2024-07-25 11:00", comentario: "Se rechaza por INE vencida."}]
            }
        ];

        mockSolicitudes = mockSolicitudes.map(s => {
            const defaults = {
                rfc: "XAXX010101000",
                giro: "No especificado",
                anoFundacion: 2020,
                numEmpleados: "1-5",
                ventasAnuales: "Menos de $500,000",
                ticketPromedio: 100,
                ventasLinea: "No",
                plataformasOnline: "",
                sucursalesFisicas: "No",
                cantidadSucursales: 0,
                paginaWeb: "",
                redSocial: "",
                documentos: [],
                verificacionGub: { estado: "Pendiente", observaciones: "N/A", fecha: null},
                comentariosInternos: [],
            };
            const withDefaults = { ...defaults, ...s };
            withDefaults.plataformasOnline = withDefaults.ventasLinea === "Sí" ? (withDefaults.plataformasOnline || "Sitio Web Propio") : "";
            withDefaults.cantidadSucursales = withDefaults.sucursalesFisicas === "Sí" ? (withDefaults.cantidadSucursales || 1) : 0;
            return withDefaults;
        });


        function sortData(data, key, direction) {
            let dataToSort = [...data];
            dataToSort.sort((a, b) => {
                let valA = a[key];
                let valB = b[key];

                if (key === 'id' || key === 'iaIncidencias' || key === 'diasEnEtapa' || key === 'diasTotales') {
                    valA = Number(valA);
                    valB = Number(valB);
                }
                else if (key === 'fecha') {
                    valA = new Date(a.fecha).getTime();
                    valB = new Date(b.fecha).getTime();
                }
                else if (typeof valA === 'string' && typeof valB === 'string') {
                    valA = valA.toLowerCase();
                    valB = valB.toLowerCase();
                }

                if (valA < valB) {
                    return direction === 'asc' ? -1 : 1;
                }
                if (valA > valB) {
                    return direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
            return dataToSort;
        }

        function updateSortIndicators() {
            solicitudesTableHeaders.forEach(header => {
                const indicatorIcon = header.querySelector('.sort-indicator i');
                const indicatorWrapper = header.querySelector('.sort-indicator');
                if (indicatorIcon && indicatorWrapper) {
                    indicatorIcon.classList.remove('fa-sort', 'fa-sort-up', 'fa-sort-down');
                    indicatorIcon.classList.add('fa-sort');
                    indicatorWrapper.classList.remove('asc', 'desc');

                    if (header.dataset.sortKey === currentSortKey) {
                        if (currentSortDirection === 'asc') {
                            indicatorIcon.classList.replace('fa-sort', 'fa-sort-up');
                            indicatorWrapper.classList.add('asc');
                        } else {
                            indicatorIcon.classList.replace('fa-sort', 'fa-sort-down');
                            indicatorWrapper.classList.add('desc');
                        }
                    }
                }
            });
        }

        function updateTabCounters() {
            let dataForCounts = [...mockSolicitudes];
            if (currentFilterDateFrom && currentFilterDateTo) {
                const from = new Date(currentFilterDateFrom).getTime();
                const to = new Date(currentFilterDateTo).getTime();
                dataForCounts = dataForCounts.filter(s => {
                    const solDate = new Date(s.fecha).getTime();
                    return solDate >= from && solDate <= to;
                });
            }

            const statusCounts = {
                nuevas: 0, enNegociacion: 0, autorizadas: 0, pendienteFirma: 0, firmadas: 0, rechazada: 0
            };

            dataForCounts.forEach(s => {
                if (statusCounts.hasOwnProperty(s.estatusKey)) {
                    statusCounts[s.estatusKey]++;
                }
            });

            statusTabsContainer.querySelectorAll('.status-tab-button').forEach(tabButton => {
                const filterKey = tabButton.dataset.statusFilter;
                const countSpan = tabButton.querySelector('.status-tab-count');
                if (countSpan) {
                    if (statusCounts.hasOwnProperty(filterKey)) {
                        countSpan.textContent = `(${statusCounts[filterKey]})`;
                    }
                }
            });
        }

        function renderSolicitudesTable(filterStatus = 'todas') {
            if (!solicitudesTableBody || !noResultsMessage) return;

            let dataToRender = [...mockSolicitudes];

            if (currentFilterDateFrom && currentFilterDateTo) {
                const from = new Date(currentFilterDateFrom).getTime();
                const to = new Date(currentFilterDateTo).getTime();
                dataToRender = dataToRender.filter(s => {
                    const solDate = new Date(s.fecha).getTime();
                    return solDate >= from && solDate <= to;
                });
            }

            if (filterStatus !== 'todas') {
                dataToRender = dataToRender.filter(s => s.estatusKey === filterStatus);
            }

            dataToRender = sortData(dataToRender, currentSortKey, currentSortDirection);
            updateSortIndicators();
            updateTabCounters();

            solicitudesTableBody.innerHTML = '';

            if (dataToRender.length === 0) {
                noResultsMessage.classList.remove('hidden');
            } else {
                noResultsMessage.classList.add('hidden');
            }

            dataToRender.forEach(solicitud => {
                const row = solicitudesTableBody.insertRow();
                row.insertCell().textContent = solicitud.id;
                row.insertCell().textContent = solicitud.fecha;
                row.insertCell().textContent = solicitud.nombre;
                row.insertCell().textContent = solicitud.tipoPersona;

                const estatusCell = row.insertCell();
                const estatusBadge = document.createElement('span');
                estatusBadge.classList.add('status-badge');
                const estatusTextKey = `status_${solicitud.estatusKey}`;
                const estatusText = translations[currentLangReg][estatusTextKey] || solicitud.estatusDisplay;
                estatusBadge.innerHTML = `<i class="fas ${getIconForStatus(solicitud.estatusKey)} mr-2"></i> ${estatusText}`;
                estatusBadge.title = estatusText;
                switch(solicitud.estatusKey) {
                    case 'nuevas': estatusBadge.classList.add('nuevas'); break;
                    case 'enNegociacion': estatusBadge.classList.add('en-negociacion'); break;
                    case 'autorizadas': estatusBadge.classList.add('autorizada'); break;
                    case 'pendienteFirma': estatusBadge.classList.add('pendiente-firma'); break;
                    case 'firmadas': estatusBadge.classList.add('firmada'); break;
                    case 'rechazada': estatusBadge.classList.add('incidencias'); break;
                    default: estatusBadge.classList.add('status-badge-gray');
                }
                estatusCell.appendChild(estatusBadge);

                const diasEtapaCell = row.insertCell();
                const diasEtapaChip = document.createElement('span');
                diasEtapaChip.textContent = solicitud.diasEnEtapa;
                diasEtapaChip.classList.add('dias-etapa-cell');
                 if (solicitud.diasEnEtapa <= 1) {
                    diasEtapaChip.classList.add('verde');
                } else if (solicitud.diasEnEtapa <= 3) {
                    diasEtapaChip.classList.add('ambar');
                } else {
                    diasEtapaChip.classList.add('rojo');
                }
                diasEtapaCell.appendChild(diasEtapaChip);

                const diasProcesoCell = row.insertCell();
                diasProcesoCell.textContent = solicitud.diasTotales;
                diasProcesoCell.classList.add('text-center');

                row.addEventListener('click', () => {
                    openSolicitudDetailModal(solicitud.id);
                });
            });
        }

        function getIconForStatus(statusKey) {
            switch(statusKey) {
                case 'nuevas': return 'fa-file-alt';
                case 'enNegociacion': return 'fa-comments-dollar';
                case 'autorizadas': return 'fa-check-double';
                case 'pendienteFirma': return 'fa-file-signature';
                case 'firmadas': return 'fa-check-circle';
                case 'rechazada': return 'fa-times-circle';
                default: return 'fa-question-circle';
            }
        }


        // --- Solicitud Detail Modal Logic ---
        function openSolicitudDetailModal(solicitudId, defaultTabId = 'detailTabResumen') {
            currentOpenSolicitudId = solicitudId;
            const solicitud = mockSolicitudes.find(s => s.id === solicitudId);
            if (!solicitud || !solicitudDetailModal) return;

            solicitudDetailModalTitle.textContent = `Detalle Solicitud: ${solicitud.id} - ${solicitud.nombre}`;

            // Populate "Resumen" Tab (first tab)
            safeSetText('modalDetailId', solicitud.id);
            safeSetText('modalDetailFechaSolicitud', solicitud.fecha);
            safeSetText('modalDetailNombreComercio', solicitud.nombre);
            safeSetText('modalDetailTipoPersona', solicitud.tipoPersona);

            // RFC Validation Styling
            const rfcSpanModal = document.getElementById('modalDetailRFC');
            if (rfcSpanModal) {
                safeSetText('modalDetailRFC', solicitud.rfc);
                const rfcRegex = /^[A-Z&Ñ]{3,4}\d{6}[A-Z\d]{3}$/;
                rfcSpanModal.classList.remove('rfc-valid', 'rfc-invalid');
                if (solicitud.rfc && rfcRegex.test(solicitud.rfc)) {
                    rfcSpanModal.classList.add('rfc-valid');
                } else {
                    rfcSpanModal.classList.add('rfc-invalid');
                }
            }

            // Populate other "Datos Complementarios"
            safeSetText('modalDetailGiro', solicitud.giro);
            safeSetText('modalDetailAnoFundacion', solicitud.anoFundacion);
            safeSetText('modalDetailNumEmpleados', solicitud.numEmpleados);
            safeSetText('modalDetailVentasAnuales', solicitud.ventasAnuales);
            safeSetText('modalDetailTicketPromedio', solicitud.ticketPromedio);
            safeSetText('modalDetailVentasLinea', solicitud.ventasLinea);
            safeSetText('modalDetailSucursales', solicitud.sucursalesFisicas);

            // Conditional visibility for 'Plataformas utilizadas'
            const plataformasFieldModal = document.getElementById('modalDetailPlataformasField');
            const plataformasSpan = document.getElementById('modalDetailPlataformas');
            if (plataformasFieldModal && plataformasSpan) {
                if (solicitud.ventasLinea === "Sí" && solicitud.plataformasOnline) {
                    plataformasSpan.textContent = solicitud.plataformasOnline;
                    plataformasFieldModal.classList.remove('hidden');
                } else {
                    plataformasFieldModal.classList.add('hidden');
                    plataformasSpan.textContent = '';
                }
            }

            // Conditional visibility for 'Cantidad de sucursales'
            const cantidadSucursalesFieldModal = document.getElementById('modalDetailCantidadSucursalesField');
            const cantidadSucursalesSpan = document.getElementById('modalDetailCantidadSucursales');
            if (cantidadSucursalesFieldModal && cantidadSucursalesSpan) {
                if (solicitud.sucursalesFisicas === "Sí") {
                    cantidadSucursalesSpan.textContent = solicitud.cantidadSucursales;
                    cantidadSucursalesFieldModal.classList.remove('hidden');
                } else {
                    cantidadSucursalesFieldModal.classList.add('hidden');
                    cantidadSucursalesSpan.textContent = '';
                }
            }

            // Populate and manage 'Página Web' link
            const paginaWebLinkModal = document.getElementById('modalDetailPaginaWeb');
            const paginaWebField = paginaWebLinkModal ? paginaWebLinkModal.closest('.detail-field') : null;
            if (paginaWebLinkModal && paginaWebField) {
                if (solicitud.paginaWeb) {
                    paginaWebLinkModal.textContent = solicitud.paginaWeb;
                    paginaWebLinkModal.href = solicitud.paginaWeb.startsWith('http') ? solicitud.paginaWeb : `https://${solicitud.paginaWeb}`;
                    paginaWebField.classList.remove('hidden');
                } else {
                    paginaWebLinkModal.textContent = '';
                    paginaWebLinkModal.href = '#';
                    paginaWebField.classList.add('hidden');
                }
            }

            // Populate and manage 'Red Social' link
            const redSocialLinkModal = document.getElementById('modalDetailRedSocial');
            const redSocialField = redSocialLinkModal ? redSocialLinkModal.closest('.detail-field') : null;
            if (redSocialLinkModal && redSocialField) {
                if (solicitud.redSocial) {
                    redSocialLinkModal.textContent = solicitud.redSocial;
                    redSocialLinkModal.href = solicitud.redSocial.startsWith('http') ? solicitud.redSocial : `https://${solicitud.redSocial}`;
                    redSocialField.classList.remove('hidden');
                } else {
                    redSocialLinkModal.textContent = '';
                    redSocialLinkModal.href = '#';
                    redSocialField.classList.add('hidden');
                }
            }

            // Estado General Badge
            const estadoWrapper = document.getElementById('modalDetailEstadoGeneral');
            if (estadoWrapper) {
                estadoWrapper.innerHTML = '';
                const estadoBadgeInner = document.createElement('span');
                estadoBadgeInner.classList.add('status-badge');
                const estatusTextKeyModal = `status_${solicitud.estatusKey}`;
                const estatusTextModal = translations[currentLangReg][estatusTextKeyModal] || solicitud.estatusDisplay;
                estadoBadgeInner.innerHTML = `<i class="fas ${getIconForStatus(solicitud.estatusKey)} mr-2"></i> ${estatusTextModal}`;
                switch(solicitud.estatusKey) {
                    case 'nuevas': estadoBadgeInner.classList.add('nuevas'); break;
                    case 'enNegociacion': estadoBadgeInner.classList.add('en-negociacion'); break;
                    case 'autorizadas': estadoBadgeInner.classList.add('autorizada'); break;
                    case 'pendienteFirma': estadoBadgeInner.classList.add('pendiente-firma'); break;
                    case 'firmadas': estadoBadgeInner.classList.add('firmada'); break;
                    case 'rechazada': estadoBadgeInner.classList.add('incidencias'); break;
                    default: estadoBadgeInner.classList.add('status-badge-gray');
                }
                estadoWrapper.appendChild(estadoBadgeInner);
            }

            safeSetText('modalDetailDiasEnEtapa', solicitud.diasEnEtapa);
            safeSetText('modalDetailDiasEnProceso', solicitud.diasTotales);

            const diasEtapaChipModal = document.getElementById('modalDetailDiasEnEtapa'); // This line was already present, but the code below it to populate was missing.
            // Ensure the chip content is set correctly (it was missing in the original search block but present in my intended replacement)
            if (diasEtapaChipModal) { // Check if it exists before manipulating
                diasEtapaChipModal.innerHTML = '';
                const diasChipInner = document.createElement('span');
                diasChipInner.classList.add('dias-etapa-cell');
                diasChipInner.textContent = solicitud.diasEnEtapa;
                if (solicitud.diasEnEtapa <= 1) diasChipInner.classList.add('verde');
                else if (solicitud.diasEnEtapa <= 3) diasChipInner.classList.add('ambar'); // Assuming 'ambar' is yellow
                else diasChipInner.classList.add('rojo');
                diasEtapaChipModal.appendChild(diasChipInner);
            }

            detailComentariosMC.value = "";
            updateCharCounterMC();
            renderCommentHistory(solicitud.comentariosInternos || []);


            // Populate "Análisis IA" Tab
            const documentList = document.getElementById('detailDocumentList');
            documentList.innerHTML = '';
            (solicitud.documentos || []).forEach(doc => {
                const listItem = document.createElement('li');
                listItem.classList.add('document-list-item');

                const nameSpan = document.createElement('span');
                nameSpan.classList.add('document-name');
                nameSpan.textContent = translations[currentLangReg][doc.nombreKey] || doc.nombreKey.replace('doc_name_', '').replace(/_/g, ' ');

                const statusLinkContainer = document.createElement('div');
                statusLinkContainer.classList.add('document-status-container');

                const statusBadge = document.createElement('span');
                statusBadge.classList.add('status-badge');
                let statusText = "";
                let titleText = "";

                if (doc.estadoIA === "OK") {
                    statusBadge.classList.add('docs-ok');
                    statusText = translations[currentLangReg].doc_status_ok || "OK";
                    titleText = statusText;
                } else if (doc.estadoIA === "Incidencia") {
                    statusBadge.classList.add('incidencias');
                    statusText = translations[currentLangReg].doc_status_incidencia || "Incidencia";
                    titleText = translations[currentLangReg][doc.incidenciaKey] || doc.incidenciaKey || "Detalle de incidencia no especificado.";
                } else {
                    statusBadge.classList.add('pendiente-ia');
                    statusText = translations[currentLangReg].doc_status_pendiente || "Pendiente";
                    titleText = statusText;
                }
                statusBadge.textContent = statusText;
                statusBadge.title = titleText;

                statusLinkContainer.appendChild(statusBadge);
                if (doc.estadoIA === "Incidencia") {
                    const infoIcon = document.createElement('i');
                    infoIcon.classList.add('fas', 'fa-info-circle', 'document-status-icon', 'issue', 'ml-1');
                    infoIcon.title = titleText;
                    statusLinkContainer.appendChild(infoIcon);
                }

                const link = document.createElement('a');
                link.href = `#view-doc-${doc.archivo}`;
                link.textContent = `(${translations[currentLangReg].doc_action_ver || 'Ver'})`;
                link.classList.add('document-link');
                link.addEventListener('click', (e) => {e.preventDefault(); alert(`Simulando vista del documento: ${doc.archivo}`);});
                statusLinkContainer.appendChild(link);

                listItem.appendChild(nameSpan);
                listItem.appendChild(statusLinkContainer);
                documentList.appendChild(listItem);
            });

            const globalIAStatusContainer = document.getElementById('detailGlobalIAStatus');
            globalIAStatusContainer.innerHTML = '';
            const globalIABadge = document.createElement('span');
            globalIABadge.classList.add('status-badge');
            let globalIAText = "";
            if(solicitud.verificacionGub.estado === "OK") {
                globalIABadge.classList.add('docs-ok');
                globalIAText = translations[currentLangReg].verif_status_ok || "Verificó y Verificable";
            } else if (solicitud.verificacionGub.estado === "No Verificable") {
                globalIABadge.classList.add('incidencias');
                globalIAText = translations[currentLangReg].verif_status_no_verificable || "No Verificable";
            } else {
                globalIABadge.classList.add('pendiente-ia');
                globalIAText = translations[currentLangReg].verif_status_parcial || "Verificación Parcial";
                 if(solicitud.verificacionGub.estado === "Pendiente")  globalIAText = translations[currentLangReg].ia_status_pending || "Pendiente";
            }
            globalIABadge.textContent = globalIAText;
            globalIABadge.title = globalIAText;
            globalIAStatusContainer.appendChild(globalIABadge);

            document.getElementById('detailGlobalIADate').textContent = solicitud.verificacionGub.fecha ? `Fecha/Hora: ${solicitud.verificacionGub.fecha}` : 'Fecha/Hora: N/A';
            document.getElementById('detailGlobalIAObservaciones').textContent = solicitud.verificacionGub.observaciones;

            if (solicitud.estatusKey === 'nuevas' || solicitud.estatusKey === 'enNegociacion') {
                detailAprobarButton.classList.remove('hidden');
                detailRechazarButton.classList.remove('hidden');
            } else {
                detailAprobarButton.classList.add('hidden');
                detailRechazarButton.classList.add('hidden');
            }

            switchDetailModalTab(defaultTabId);
            solicitudDetailModal.classList.remove('hidden');
            solicitudDetailModal.classList.add('open');
        }

        function renderCommentHistory(comments) {
            commentHistoryContainer.innerHTML = '';
            if (!comments || comments.length === 0) {
                const noCommentsItem = document.createElement('p');
                noCommentsItem.classList.add('text-sm', 'text-gray-500');
                noCommentsItem.textContent = 'No hay comentarios previos.';
                commentHistoryContainer.appendChild(noCommentsItem);
                return;
            }
            comments.forEach(comment => {
                const item = document.createElement('div');
                item.classList.add('comment-history-item');
                item.innerHTML = `<span class="user">${comment.usuario}:</span> ${comment.comentario} <span class="date">(${new Date(comment.fecha).toLocaleString('es-MX', { dateStyle: 'short', timeStyle: 'short' })})</span>`;
                commentHistoryContainer.appendChild(item);
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
                if (currentOpenSolicitudId === solicitudId) {
                    renderCommentHistory(mockSolicitudes[solicitudIndex].comentariosInternos);
                }
                return true;
            }
            return false;
        }


        function closeDetailModal() {
            if (solicitudDetailModal) {
                solicitudDetailModal.classList.add('hidden');
                solicitudDetailModal.classList.remove('open');
                currentOpenSolicitudId = null;
            }
        }
        if(closeSolicitudDetailModalButton) closeSolicitudDetailModalButton.addEventListener('click', closeDetailModal);
        // if(detailCerrarModalButton) detailCerrarModalButton.addEventListener('click', closeDetailModal);

        if(detailComentariosMC && charCounterMC) {
            detailComentariosMC.addEventListener('input', updateCharCounterMC);
        }
        function updateCharCounterMC() {
            if(detailComentariosMC && charCounterMC) {
                const currentLength = detailComentariosMC.value.length;
                const maxLength = detailComentariosMC.maxLength;
                charCounterMC.textContent = `${currentLength}/${maxLength}`;
            }
        }

        function showToast(message) {
            if (!toastMessage) return;
            toastMessage.innerHTML = message;
            toastMessage.classList.remove('hidden');
            toastMessage.classList.add('show');
            setTimeout(() => {
                toastMessage.classList.remove('show');
                 setTimeout(() => {
                    toastMessage.classList.add('hidden');
                }, 500);
            }, 3000);
        }

        if(detailGuardarComentarioButton){
            detailGuardarComentarioButton.addEventListener('click', () => {
                if (currentOpenSolicitudId) {
                    const comentario = detailComentariosMC.value;
                    if (comentario.trim() === "") {
                        alert("Por favor, ingrese un comentario para guardar.");
                        return;
                    }
                    if (addCommentToSolicitud(currentOpenSolicitudId, comentario)) {
                        showToast(translations[currentLangReg].comentario_guardado || "Comentario guardado.");
                        detailComentariosMC.value = "";
                        updateCharCounterMC();
                    }
                }
            });
        }


        if(detailAprobarButton) {
            detailAprobarButton.addEventListener('click', () => {
                if (currentOpenSolicitudId) {
                    const comentario = detailComentariosMC.value;
                    if (comentario.trim() !== "") {
                        addCommentToSolicitud(currentOpenSolicitudId, comentario);
                    }

                    const solicitudIndex = mockSolicitudes.findIndex(s => s.id === currentOpenSolicitudId);
                    if (solicitudIndex !== -1) {
                        mockSolicitudes[solicitudIndex].estatusKey = 'enNegociacion';
                        mockSolicitudes[solicitudIndex].estatusDisplay = translations[currentLangReg].status_enNegociacion || 'En Negociación';
                        mockSolicitudes[solicitudIndex].diasEnEtapa = 0;

                        const toastMsg = (translations[currentLangReg].toast_solicitud_aprobada || "Solicitud {id} aprobada y movida a 'En Proceso'.")
                                            .replace('{id}', `<strong>${currentOpenSolicitudId}</strong>`);
                        showToast(toastMsg);
                        closeDetailModal();
                        const activeStatusFilter = document.querySelector('.status-tab-button.active');
                        renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas');
                    }
                }
            });
        }
        if(detailRechazarButton) {
            detailRechazarButton.addEventListener('click', () => {
                if (currentOpenSolicitudId) {
                     const comentario = detailComentariosMC.value;
                    if (comentario.trim() === "") {
                        alert(translations[currentLangReg].alerta_comentario_rechazo || "Por favor, ingrese un comentario explicando el motivo del rechazo.");
                        return;
                    }
                    addCommentToSolicitud(currentOpenSolicitudId, comentario);

                    const solicitudIndex = mockSolicitudes.findIndex(s => s.id === currentOpenSolicitudId);
                    if (solicitudIndex !== -1) {
                        mockSolicitudes[solicitudIndex].estatusKey = 'rechazada';
                        mockSolicitudes[solicitudIndex].estatusDisplay = translations[currentLangReg].status_rechazada || 'Rechazada';
                        mockSolicitudes[solicitudIndex].diasEnEtapa = 0;

                        const toastMsg = (translations[currentLangReg].toast_solicitud_rechazada || "Solicitud {id} ha sido marcada como 'Rechazada'.")
                                            .replace('{id}', `<strong>${currentOpenSolicitudId}</strong>`);
                        showToast(toastMsg);
                        closeDetailModal();
                        const activeStatusFilter = document.querySelector('.status-tab-button.active');
                        renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas');
                    }
                }
            });
        }


        solicitudDetailModalTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                switchDetailModalTab(tab.dataset.tab);
            });
        });

        function switchDetailModalTab(tabId) {
            solicitudDetailTabContents.forEach(content => {
                content.classList.remove('active');
                content.classList.add('hidden');
                if (content.id === tabId) {
                    content.classList.add('active');
                    content.classList.remove('hidden');
                }
            });
            solicitudDetailModalTabs.forEach(button => {
                button.classList.remove('active');
                if (button.dataset.tab === tabId) {
                    button.classList.add('active');
                }
            });
        }


        solicitudesTableHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const sortKey = header.dataset.sortKey;
                if (!sortKey) return;

                if (currentSortKey === sortKey) {
                    currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    currentSortKey = sortKey;
                    currentSortDirection = 'asc';
                }
                const activeFilter = document.querySelector('.status-tab-button.active');
                renderSolicitudesTable(activeFilter ? activeFilter.dataset.statusFilter : 'todas');
            });
        });

        if (statusTabsContainer) {
            statusTabsContainer.addEventListener('click', (event) => {
                const tabButton = event.target.closest('.status-tab-button');
                if (tabButton) {
                    statusTabsContainer.querySelectorAll('.status-tab-button').forEach(btn => btn.classList.remove('active'));
                    tabButton.classList.add('active');
                    const filter = tabButton.dataset.statusFilter;

                    if (filter === 'enNegociacion') { // Specific sort for "En Negociación"
                        currentSortKey = 'diasEnEtapa';
                        currentSortDirection = 'desc';
                    } else { // Default to date for "Todas" and other tabs initially
                        currentSortKey = 'fecha';
                        currentSortDirection = 'desc';
                    }
                    renderSolicitudesTable(filter);
                }
            });
        }

        if (applyDateFilterButton) {
            applyDateFilterButton.addEventListener('click', () => {
                const dateFrom = dateFromInput.value;
                const dateTo = dateToInput.value;

                if (dateFrom && dateTo) {
                    currentFilterDateFrom = dateFrom;
                    currentFilterDateTo = dateTo;
                    clearDateFilterButton.classList.remove('hidden');
                } else {
                    currentFilterDateFrom = null;
                    currentFilterDateTo = null;
                    clearDateFilterButton.classList.add('hidden');
                }
                const activeStatusFilter = document.querySelector('.status-tab-button.active');
                renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas');
            });
        }

        if (clearDateFilterButton) {
            clearDateFilterButton.addEventListener('click', () => {
                dateFromInput.value = '';
                dateToInput.value = '';
                currentFilterDateFrom = null;
                currentFilterDateTo = null;
                clearDateFilterButton.classList.add('hidden');
                const activeStatusFilter = document.querySelector('.status-tab-button.active');
                renderSolicitudesTable(activeStatusFilter ? activeStatusFilter.dataset.statusFilter : 'todas');
            });
        }


        if (hamburgerButton && sidebar) {
            hamburgerButton.addEventListener('click', () => sidebar.classList.toggle('open'));
        }

        if (helpButton && helpModal && closeHelpModal) {
            helpButton.addEventListener('click', () => {
                helpModal.classList.remove('hidden');
                helpModal.classList.add('open');
                switchModalTab('contactTabHelp', 'helpModal');
            });
            closeHelpModal.addEventListener('click', () => {
                helpModal.classList.remove('open');
                helpModal.classList.add('hidden');
            });
            helpModal.addEventListener('click', (event) => {
                if (event.target === helpModal && event.target.id === 'helpModal') {
                    helpModal.classList.remove('open');
                    helpModal.classList.add('hidden');
                }
            });
        }

        modalTabs.forEach(tab => { // This is for the HELP modal tabs
            tab.addEventListener('click', () => switchModalTab(tab.dataset.tab, 'helpModal'));
        });

        // Generic function to switch tabs in ANY modal, given the modal's ID
        function switchModalTab(tabId, modalElementId) {
            const currentModal = document.getElementById(modalElementId);
            if (!currentModal) return;

            const tabContentSelector = modalElementId === 'solicitudDetailModal' ? '.detail-tab-content' : '.tab-content';
            currentModal.querySelectorAll(tabContentSelector).forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
             currentModal.querySelectorAll('.modal-tab-button').forEach(button => {
                button.classList.remove('active');
                if (button.dataset.tab === tabId) button.classList.add('active');
            });
        }

        if (notificationButton && notificationDropdown) {
            notificationButton.addEventListener('click', (event) => {
                event.stopPropagation();
                notificationDropdown.classList.toggle('open');
                notificationDropdown.classList.toggle('hidden');
                if (userDropdown && userDropdown.classList.contains('open')) {
                    userDropdown.classList.remove('open');
                    userDropdown.classList.add('hidden');
                }
            });
        }
        if (userMenuButton && userDropdown) {
            userMenuButton.addEventListener('click', (event) => {
                event.stopPropagation();
                userDropdown.classList.toggle('open');
                userDropdown.classList.toggle('hidden');
                if (notificationDropdown && notificationDropdown.classList.contains('open')) {
                    notificationDropdown.classList.remove('open');
                    notificationDropdown.classList.add('hidden');
                }
            });
        }

        document.addEventListener('click', (event) => {
            if (notificationDropdown && notificationButton && !notificationButton.contains(event.target) && !notificationDropdown.contains(event.target)) {
                notificationDropdown.classList.remove('open');
                notificationDropdown.classList.add('hidden');
            }
            if (userDropdown && userMenuButton && !userMenuButton.contains(event.target) && !userDropdown.contains(event.target)) {
                userDropdown.classList.remove('open');
                userDropdown.classList.add('hidden');
            }
            if (solicitudDetailModal && solicitudDetailModal.classList.contains('open') && event.target === solicitudDetailModal) {
                closeDetailModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                if (solicitudDetailModal && solicitudDetailModal.classList.contains('open')) {
                    closeDetailModal();
                }
                if (helpModal && helpModal.classList.contains('open')) {
                     helpModal.classList.remove('open');
                     helpModal.classList.add('hidden');
                }
            }
        });

        function translatePage(lang) {
            currentLangReg = lang;
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                let textToSet = (translations[lang] && translations[lang][key]) ?
                                  translations[lang][key] :
                                  (translations['es'] && translations['es'][key] ? translations['es'][key] : el.textContent);

                const isButton = el.tagName === 'BUTTON' || (el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'button'));

                if (isButton && el.classList.contains('status-tab-button')) {
                    const countSpan = el.querySelector('.status-tab-count');
                    let currentCountHTML = "";
                    if(countSpan && el.dataset.statusFilter !== 'todas') {
                        currentCountHTML = countSpan.outerHTML;
                        el.innerHTML = textToSet + " " + currentCountHTML;
                    } else {
                         el.textContent = textToSet;
                    }
                } else if (isButton) {
                    const textSpan = el.querySelector('span[data-translate]');
                    if (textSpan && textSpan.dataset.translate === key) {
                        textSpan.textContent = textToSet;
                    } else if (el.childNodes.length === 1 && el.firstChild.nodeType === Node.TEXT_NODE) {
                        el.firstChild.textContent = textToSet;
                    } else {
                        let textNodeFound = false;
                        el.childNodes.forEach(child => {
                            if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
                                child.textContent = textToSet;
                                textNodeFound = true;
                            } else if (child.tagName === 'SPAN' && child.dataset.translate === key) {
                                child.textContent = textToSet;
                                textNodeFound = true;
                            }
                        });
                    }
                } else if (el.classList.contains('sort-indicator')) {
                    // Sort indicators are handled by JS
                }
                else {
                     el.textContent = textToSet;
                }
            });
            const activeFilter = document.querySelector('.status-tab-button.active');
            renderSolicitudesTable(activeFilter ? activeFilter.dataset.statusFilter : 'todas');
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
                const isMouseOverButton = floatingHelpBtn ? floatingHelpBtn.matches(':hover') : false;
                if (!isMouseOverButton && floatingHelpBtn) {
                    floatingHelpBtn.dispatchEvent(new MouseEvent('mouseleave'));
                }
            });
        }
        if(helpModal) {
             helpModal.addEventListener('click', (event) => {
                if (event.target === helpModal && event.target.id === 'helpModal') {
                    helpButtonExpandedManually = false;
                    const isMouseOverButton = floatingHelpBtn ? floatingHelpBtn.matches(':hover') : false;
                    if (!isMouseOverButton && floatingHelpBtn) {
                        floatingHelpBtn.dispatchEvent(new MouseEvent('mouseleave'));
                    }
                }
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            translatePage(currentLangReg);
            // Set default sort order for "Todas" tab explicitly on load
            currentSortKey = 'fecha'; // Changed default as per request
            currentSortDirection = 'desc';
            const initialActiveTab = statusTabsContainer ? statusTabsContainer.querySelector('.status-tab-button.active') : null;
            renderSolicitudesTable(initialActiveTab ? initialActiveTab.dataset.statusFilter : 'todas');
        });

[end of script.js]
