// DOM Element References (Scope: Global, Initialized on DOMContentLoaded or immediately)
        let sidebar, hamburgerButton, helpButton, helpModal, closeHelpModal, openFaqModalButton, faqModal, closeFaqModalButton;
        let notificationButton, notificationDropdown, userMenuButton, userDropdown;
        let statusTabsContainer, solicitudesTableBody, solicitudesTableHeaders, noResultsMessage;
        let dateFromInput, dateToInput, applyDateFilterButton, clearDateFilterButton, toastMessage, globalSearchInput;
        let selectAllCheckbox, massActionsButton;

        // Solicitud Detail Modal Elements
        let solicitudDetailModal, closeSolicitudDetailModalButton, solicitudDetailModalTitle, copySolicitudIdIcon;
        let solicitudDetailModalTabsContainer, solicitudDetailTabContents, detailAprobarButton, detailRechazarButton;
        let detailComentariosMC, charCounterMC, commentHistoryContainer, detailGuardarComentarioButton, comentariosUnsavedIndicator;

        // Tasas y Contratos Elements
        let guardarTasasButton, generarContratosButton, contratosLoadingMessage, contratoProgressCounter, contratosGeneradosListContainer, inputComisionTransaccion;

        // Rejection Modal Elements
        let rejectionReasonModal, closeRejectionModalButton, rejectionReasonSelect, rejectionReasonText, rejectionCharCounter, confirmRejectionButton, cancelRejectionButton;

        // Correction Modal Elements
        let requestCorrectionModal, closeCorrectionModalButton, correctionMessageText, confirmCorrectionButton, cancelCorrectionButton;

        // Generic Confirmation Modal Elements
        let confirmationModal, confirmationModalTitle, confirmationModalText, confirmActionButton, cancelConfirmationButton, closeConfirmationModal;

        // Pagination Elements
        let paginationControls, prevPageButton, nextPageButton, pageInfo;
        const ITEMS_PER_PAGE = 10; // Ajustado a 10 para el ejemplo
        let currentPage = 1;

        // State Variables (Global or Module-level)
        let currentSortKey = 'fecha';
        let currentSortDirection = 'desc';
        let currentFilterDateFrom = null;
        let currentFilterDateTo = null;
        let currentOpenSolicitudId = null;
        let lastSavedComment = "";
        let unsavedCommentExists = false;
        let tasasGuardadasParaSolicitudActual = false;
        let contratosGeneradosParaSolicitudActual = false;
        let currentLangReg = 'es'; // Idioma por defecto
        let activeFilters = { status: 'todas', globalSearch: '', dateFrom: null, dateTo: null };
        let allSolicitudesData = []; // Contenedor para todos los datos de solicitudes

        // Translations Object (Simplified for brevity, load full from a JSON or separate JS in a real app)
        const translations = {
            es: {
                nav_home: "Inicio", nav_mpos: "Clientes", nav_reports: "Reportes", nav_config: "Configuración", nav_logout: "Cerrar Sesión",
                user_name_placeholder: "Alex Pérez", help_button_text_float: "¿Necesitas ayuda?",
                modal_help_title_tabs: "Centro de Ayuda",
                solicitudes_title: "Solicitudes de Registro de Comercios",
                date_filter_from: "Desde:", date_filter_to: "Hasta:", date_filter_apply: "Filtrar", date_filter_clear: "Limpiar Filtro",
                status_tab_all: "Todas", status_tab_new: "Nuevas", status_tab_in_negotiation: "En Negociación",
                status_tab_authorized: "Autorizadas", status_tab_pending_signature: "Pendiente Firma",
                status_tab_signed: "Firmadas", status_tab_rejected: "Rechazadas",
                table_header_id: "ID", table_header_date: "Fecha Sol.", table_header_name: "Comercio",
                table_header_type: "Tipo P.", table_header_status: "Estado", table_header_dias_etapa: "Días Etapa", table_header_dias_proceso: "Días Proceso",
                no_solicitudes_message: "No se encontraron solicitudes que coincidan con los filtros aplicados.",
                detail_tab_resumen_ux: "Resumen", detail_tab_analisis_ia: "Análisis IA", detail_tab_tasas_comisiones: "Comisión",
                detail_tab_contratos: "Contratos", detail_tab_comentarios_ux: "Comentarios",
                detail_section_title_resumen_solicitud: "Resumen de la Solicitud",
                detail_label_id: "ID Solicitud:", detail_label_fecha_sol: "Fecha Solicitud:",
                detail_label_nombre_comercio: "Nombre Comercio:", detail_label_tipo_persona: "Tipo Persona:",
                detail_label_estado_general: "Estado General:", detail_label_dias_proceso: "Días de Proceso:", detail_label_dias_etapa: "Días en Etapa:",
                detail_section_title_analisis_ia: "Análisis Detallado por IA",
                detail_section_title_tasas_comisiones: "Configuración de Comisión", label_comision_transaccion: "Comisión por Transacción ($):",
                tooltip_comision_transaccion: "Comisión por cada transacción exitosa.", button_guardar_tasas: "Guardar Comisión",
                detail_section_title_contratos: "Generación de Contratos", button_generar_contratos: "Generar Contratos", button_regenerar_contratos: "Re-generar Contratos",
                msj_conectando_api_contratos: "Generando tus contratos… Esto tomará unos segundos.",
                detail_section_title_conversacion: "Conversación", detail_action_guardar_comentario: "Guardar Comentario",
                detail_action_aprobar_solicitud: "Aprobar Solicitud", detail_action_rechazar_solicitud: "Rechazar Solicitud",
                modal_title_motivo_rechazo: "Motivo del Rechazo", label_motivo_rechazo: "Seleccione un motivo principal:",
                button_confirmar_rechazo: "Confirmar Rechazo", button_cancelar: "Cancelar",
                id_copiado: "ID de Solicitud copiado al portapapeles.",
                tasas_guardadas_exito: "Comisión guardada exitosamente.", contratos_generados_toast: "Contratos generados.",
                comentario_guardado: "Comentario guardado.",
                page_info_text: "Página {currentPage} de {totalPages}",
                // ... (más traducciones)
            },
            // en: { ... } // English translations
        };

        // HELPER FUNCTIONS
        function safeSetText(id, txt) {
            const el = document.getElementById(id);
            if (el) el.textContent = txt != null ? txt : ''; // Asegurar que no sea null/undefined
        }

        function gebi(id) { return document.getElementById(id); } // Shorthand

        function normalizeText(text) {
            if (typeof text !== 'string') return '';
            return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        }

        function showToast(messageKey, type = 'success', replacements = {}) {
            if (!toastMessage) return;
            let message = translations[currentLangReg][messageKey] || messageKey;
            for (const key in replacements) {
                message = message.replace(`{${key}}`, replacements[key]);
            }
            toastMessage.innerHTML = message; // Usar innerHTML si el mensaje puede tener strong/em
            toastMessage.className = 'hidden'; // Limpiar clases previas
            toastMessage.classList.add('show', type); // Añadir 'success', 'error', 'warning', 'info'
            setTimeout(() => {
                toastMessage.classList.remove('show');
                setTimeout(() => { toastMessage.classList.add('hidden'); }, 500);
            }, 3000);
        }

        // DOM Initialization
        function initializeDOMElements() {
            sidebar = gebi('sidebar'); hamburgerButton = gebi('hamburgerButton');
            helpButton = gebi('floatingHelpButton'); helpModal = gebi('helpModal');
            closeHelpModal = gebi('closeHelpModal'); openFaqModalButton = gebi('openFaqModalButton');
            faqModal = gebi('faqModal'); closeFaqModalButton = gebi('closeFaqModalButton');
            notificationButton = gebi('notificationButton'); notificationDropdown = gebi('notificationDropdown');
            userMenuButton = gebi('userMenuButton'); userDropdown = gebi('userDropdown');
            statusTabsContainer = gebi('statusTabsContainer'); solicitudesTableBody = gebi('solicitudesTableBody');
            solicitudesTableHeaders = document.querySelectorAll('.solicitudes-table th[data-sort-key]');
            noResultsMessage = gebi('noResultsMessage');
            dateFromInput = gebi('dateFrom'); dateToInput = gebi('dateTo');
            applyDateFilterButton = gebi('applyDateFilter'); clearDateFilterButton = gebi('clearDateFilter');
            toastMessage = gebi('toastMessage'); globalSearchInput = gebi('globalSearchInput');
            selectAllCheckbox = gebi('selectAllCheckbox'); massActionsButton = gebi('massActionsButton');

            solicitudDetailModal = gebi('solicitudDetailModal'); closeSolicitudDetailModalButton = gebi('closeSolicitudDetailModal');
            solicitudDetailModalTitle = gebi('solicitudDetailModalTitle'); copySolicitudIdIcon = gebi('copySolicitudIdIcon');
            solicitudDetailModalTabsContainer = gebi('solicitudDetailModalTabs');
            solicitudDetailTabContents = document.querySelectorAll('#solicitudDetailModal .detail-tab-content');
            detailAprobarButton = gebi('detailAprobarButton'); detailRechazarButton = gebi('detailRechazarButton');
            detailComentariosMC = gebi('detailComentariosMC'); charCounterMC = gebi('charCounterMC');
            commentHistoryContainer = gebi('commentHistory'); detailGuardarComentarioButton = gebi('detailGuardarComentarioButton');
            comentariosUnsavedIndicator = gebi('comentariosUnsavedIndicator');

            guardarTasasButton = gebi('guardarTasasButton'); generarContratosButton = gebi('generarContratosButton');
            contratosLoadingMessage = gebi('contratosLoadingMessage'); contratoProgressCounter = gebi('contratoProgressCounter');
            contratosGeneradosListContainer = gebi('contratosGeneradosList'); // El div que contiene el UL
            inputComisionTransaccion = gebi('inputComisionTransaccion');

            rejectionReasonModal = gebi('rejectionReasonModal'); closeRejectionModalButton = gebi('closeRejectionModalButton');
            rejectionReasonSelect = gebi('rejectionReasonSelect'); rejectionReasonText = gebi('rejectionReasonText');
            rejectionCharCounter = gebi('rejectionCharCounter'); confirmRejectionButton = gebi('confirmRejectionButton');
            cancelRejectionButton = gebi('cancelRejectionButton');

            requestCorrectionModal = gebi('requestCorrectionModal'); closeCorrectionModalButton = gebi('closeCorrectionModalButton');
            correctionMessageText = gebi('correctionMessageText'); confirmCorrectionButton = gebi('confirmCorrectionButton');
            cancelCorrectionButton = gebi('cancelCorrectionButton');

            confirmationModal = gebi('confirmationModal'); confirmationModalTitle = gebi('confirmationModalTitle');
            confirmationModalText = gebi('confirmationModalText'); confirmActionButton = gebi('confirmActionButton');
            cancelConfirmationButton = gebi('cancelConfirmationButton'); closeConfirmationModal = gebi('closeConfirmationModal');

            paginationControls = gebi('paginationControls'); prevPageButton = gebi('prevPageButton');
            nextPageButton = gebi('nextPageButton'); pageInfo = gebi('pageInfo');
        }


        // DATA HANDLING & RENDERING
        function fetchData() { // Simulación de fetch
            return new Promise(resolve => {
                setTimeout(() => {
                    // Simular la estructura de datos que vendría de un backend
                    const data = [
                        { id: "100003", fecha: "2024-07-30", nombre: "Abarrotes Don Pepe", tipoPersona: "Persona Física", estatusKey: "nuevas", diasEnEtapa: 1, diasEnProceso: 1, rfc: "PEPJ700707J07", giro: "Tienda de Abarrotes", anoFundacion: 2005, numEmpleados: "1-5", ventasAnuales: "Menos de $500,000", ticketPromedio: 80, ventasLinea: "No", plataformasOnline: "", sucursalesFisicas: "Sí", cantidadSucursales: 1, paginaWeb: "", redSocial: "https://facebook.com/donpepe", comentariosInternos: [], tasas: null, contratosGenerados: false, tasasGuardadas: false, motivoRechazo: "" },
                        { id: "100004", fecha: "2024-08-01", nombre: "Consultoría Global", tipoPersona: "Persona Moral", estatusKey: "enNegociacion", diasEnEtapa: 0, diasEnProceso: 3, rfc: "CGL200101ABC", giro: "Servicios Profesionales", anoFundacion: 2020, numEmpleados: "5-10", ventasAnuales: "$500,000 - $1,000,000", ticketPromedio: 2500, ventasLinea: "Sí", plataformasOnline: "Sitio Web Propio, LinkedIn", sucursalesFisicas: "Sí", cantidadSucursales: 1, paginaWeb: "https://consultoriaglobal.com", redSocial: "https://linkedin.com/company/consultoriaglobal", comentariosInternos: [], tasas: { comisionTransaccion: "2.00" }, contratosGenerados: false, tasasGuardadas: true, motivoRechazo: "" },
                        { id: "100005", fecha: "2024-08-02", nombre: "Restaurante La Delicia", tipoPersona: "Persona Física", estatusKey: "autorizadas", diasEnEtapa: 1, diasEnProceso: 5, rfc: "DELR850505R5A", giro: "Restaurantes", anoFundacion: 2010, numEmpleados: "5-10", ventasAnuales: "$1,000,000 - $5,000,000", ticketPromedio: 250, ventasLinea: "No", plataformasOnline: "", sucursalesFisicas: "Sí", cantidadSucursales: 2, paginaWeb: "https://ladelicia.com", redSocial: "https://instagram.com/ladelicia", comentariosInternos: [], tasas: { comisionTransaccion: "2.75" }, contratosGenerados: false, tasasGuardadas: true, motivoRechazo: "" },
                        { id: "100007", fecha: "2024-07-28", nombre: "Fonda Doña Pelos", tipoPersona: "Persona Física", estatusKey: "pendienteFirma", diasEnEtapa: 4, diasEnProceso: 8, rfc: "PEPJ800101XX1", giro: "Alimentos", anoFundacion: 2018, numEmpleados: "1-5", ventasAnuales: "Menos de $500,000", ticketPromedio: 150, ventasLinea: "Sí", plataformasOnline: "Rappi, Didi Food", sucursalesFisicas: "No", cantidadSucursales: 0, paginaWeb: "", redSocial: "", comentariosInternos: [], tasas: { comisionTransaccion: "3.50" }, contratosGenerados: true, tasasGuardadas: true, motivoRechazo: "" },
                        { id: "100008", fecha: "2024-07-25", nombre: "Constructora Robusta", tipoPersona: "Persona Moral", estatusKey: "rechazadas", diasEnEtapa: 5, diasEnProceso: 2, rfc: "CRO220101CRO", giro: "Construcción", anoFundacion: 2022, numEmpleados: "20-50", ventasAnuales: "Más de $5,000,000", ticketPromedio: 50000, ventasLinea: "No", plataformasOnline: "", sucursalesFisicas: "Sí", cantidadSucursales: 3, paginaWeb: "https://constructorarobusta.com.mx", redSocial: "", comentariosInternos: [], tasas: null, contratosGenerados: false, tasasGuardadas: false, motivoRechazo: "Actividad fuera de políticas." }
                    ].map(s => ({
                        rfc: s.rfc || "XAXX010101000",
                        giro: s.giro || "No especificado",
                        anoFundacion: s.anoFundacion || 2020,
                        numEmpleados: s.numEmpleados || "1-5",
                        ventasAnuales: s.ventasAnuales || "Menos de $500,000",
                        ticketPromedio: s.ticketPromedio || 100,
                        ventasLinea: s.ventasLinea || "No",
                        plataformasOnline: s.plataformasOnline || (s.ventasLinea === "Sí" ? "Sitio Web Propio" : ""),
                        sucursalesFisicas: s.sucursalesFisicas || "No",
                        cantidadSucursales: s.cantidadSucursales != null ? s.cantidadSucursales : (s.sucursalesFisicas === "Sí" ? 1 : 0),
                        paginaWeb: s.paginaWeb || "",
                        redSocial: s.redSocial || "",
                        ...s, // Spread an SBE to keep existing fields and their order if possible
                        estatusDisplay: translations.es[`status_${s.estatusKey}`] || s.estatusKey,
                    }));
                    allSolicitudesData = data; // Guardar los datos originales
                    resolve(allSolicitudesData);
                }, 500); // Simular retraso de red
            });
        }

        function applyAllFilters(data) {
            let filteredData = [...data];
            // Filtro de estado
            if (activeFilters.status !== 'todas') {
                filteredData = filteredData.filter(s => s.estatusKey === activeFilters.status);
            }
            // Filtro de búsqueda global
            if (activeFilters.globalSearch) {
                const searchTerm = normalizeText(activeFilters.globalSearch);
                filteredData = filteredData.filter(s =>
                    normalizeText(s.nombre).includes(searchTerm) ||
                    normalizeText(s.id).includes(searchTerm) ||
                    (s.rfc && normalizeText(s.rfc).includes(searchTerm))
                );
            }
            // Filtro de fecha
            if (activeFilters.dateFrom && activeFilters.dateTo) {
                const from = new Date(activeFilters.dateFrom).getTime();
                const to = new Date(activeFilters.dateTo).getTime();
                filteredData = filteredData.filter(s => {
                    const solDate = new Date(s.fecha).getTime();
                    return solDate >= from && solDate <= to;
                });
            }
            return filteredData;
        }

        function sortData(data, key, direction) {
            return [...data].sort((a, b) => {
                let valA = a[key];
                let valB = b[key];
                if (key === 'id' || key === 'diasEnEtapa' || key === 'diasEnProceso') {
                    valA = Number(valA); valB = Number(valB);
                } else if (key === 'fecha') {
                    valA = new Date(a.fecha).getTime(); valB = new Date(b.fecha).getTime();
                } else if (typeof valA === 'string' && typeof valB === 'string') {
                    valA = normalizeText(valA); valB = normalizeText(valB);
                }
                if (valA < valB) return direction === 'asc' ? -1 : 1;
                if (valA > valB) return direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        function renderSolicitudesTable() {
            if (!solicitudesTableBody || !noResultsMessage) return;
            showSkeletonRows(); // Mostrar skeleton mientras se procesa

            let dataToRender = applyAllFilters(allSolicitudesData);
            dataToRender = sortData(dataToRender, currentSortKey, currentSortDirection);

            updateSortIndicators();
            updateTabCounters();

            const totalItems = dataToRender.length;
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
            currentPage = Math.min(Math.max(1, currentPage), totalPages || 1);
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const paginatedData = dataToRender.slice(startIndex, startIndex + ITEMS_PER_PAGE);

            solicitudesTableBody.innerHTML = '';
            noResultsMessage.classList.toggle('hidden', paginatedData.length > 0);

            paginatedData.forEach(solicitud => {
                const row = solicitudesTableBody.insertRow();
                row.tabIndex = 0; row.dataset.id = solicitud.id;
                row.addEventListener('click', () => openSolicitudDetailModal(solicitud.id));
                row.addEventListener('keydown', (e) => { if (e.key === 'Enter') openSolicitudDetailModal(solicitud.id); });

                // Checkbox, ID, Fecha, Nombre, Tipo Persona
                const checkboxCell = row.insertCell();
                const checkbox = document.createElement('input'); checkbox.type = 'checkbox';
                checkbox.className = 'h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500';
                checkboxCell.appendChild(checkbox);
                row.insertCell().textContent = solicitud.id;
                row.insertCell().textContent = solicitud.fecha;
                row.insertCell().textContent = solicitud.nombre;
                row.insertCell().textContent = solicitud.tipoPersona;

                // Estado (Badge)
                const estadoCell = row.insertCell();
                const estatusBadge = document.createElement('span');
                estatusBadge.className = `status-badge ${solicitud.estatusKey}`; // Clase para color específico
                const estatusText = translations[currentLangReg][`status_${solicitud.estatusKey}`] || solicitud.estatusDisplay;
                const icons = { nuevas: 'fa-file-alt', enNegociacion: 'fa-comments-dollar', autorizadas: 'fa-check-double', pendienteFirma: 'fa-pen-fancy', firmadas: 'fa-file-signature', rechazadas: 'fa-times-circle' };
                estatusBadge.innerHTML = `<i class="fas ${icons[solicitud.estatusKey] || 'fa-info-circle'} mr-1"></i> ${estatusText}`;
                estadoCell.appendChild(estatusBadge);

                // Días en Etapa (Chip)
                const diasEtapaCell = row.insertCell();
                const diasEtapaChip = document.createElement('span');
                diasEtapaChip.textContent = solicitud.diasEnEtapa;
                diasEtapaChip.className = 'dias-etapa-cell ';
                if (solicitud.diasEnEtapa <= 0) diasEtapaChip.classList.add('azul'); // Ajustar lógica de colores
                else if (solicitud.diasEnEtapa <= 1) diasEtapaChip.classList.add('verde');
                else if (solicitud.diasEnEtapa <= 2) diasEtapaChip.classList.add('amarillo');
                else if (solicitud.diasEnEtapa <= 3) diasEtapaChip.classList.add('naranja');
                else diasEtapaChip.classList.add('rojo');
                diasEtapaCell.appendChild(diasEtapaChip);

                row.insertCell().textContent = solicitud.diasEnProceso != null ? solicitud.diasEnProceso : '-';
            });
            updatePaginationControls(totalPages);
        }

        function showSkeletonRows(count = ITEMS_PER_PAGE) {
            if (!solicitudesTableBody) return;
            solicitudesTableBody.innerHTML = '';
            noResultsMessage.classList.add('hidden');
            if (paginationControls) paginationControls.classList.add('hidden');
            for (let i = 0; i < count; i++) {
                const row = solicitudesTableBody.insertRow();
                row.className = 'skeleton-row';
                for (let j = 0; j < 8; j++) { // Número de columnas
                    row.insertCell().appendChild(document.createElement('div'));
                }
            }
        }

        // UI INTERACTION HANDLERS
        function setupEventListeners() {
            if (hamburgerButton && sidebar) hamburgerButton.addEventListener('click', () => sidebar.classList.toggle('open'));
            if (helpButton && helpModal) helpButton.addEventListener('click', () => toggleModal(helpModal, true));
            if (closeHelpModal) closeHelpModal.addEventListener('click', () => toggleModal(helpModal, false));
            if (openFaqModalButton && faqModal) openFaqModalButton.addEventListener('click', (e) => { e.preventDefault(); toggleModal(faqModal, true); });
            if (closeFaqModalButton) closeFaqModalButton.addEventListener('click', () => toggleModal(faqModal, false));

            [notificationButton, userMenuButton].forEach(btn => {
                if (btn) btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = btn === notificationButton ? notificationDropdown : userDropdown;
                    const otherDropdown = btn === notificationButton ? userDropdown : notificationDropdown;
                    toggleDropdown(dropdown, true);
                    if (otherDropdown) toggleDropdown(otherDropdown, false);
                });
            });

            document.addEventListener('click', (e) => { // Cerrar dropdowns si se hace clic fuera
                if (notificationDropdown && !notificationButton.contains(e.target) && !notificationDropdown.contains(e.target)) toggleDropdown(notificationDropdown, false);
                if (userDropdown && !userMenuButton.contains(e.target) && !userDropdown.contains(e.target)) toggleDropdown(userDropdown, false);
                if (solicitudDetailModal && solicitudDetailModal.classList.contains('open') && e.target === solicitudDetailModal) closeSolicitudDetailModal();
                // Cerrar otros modales similares si es necesario
            });

            if (statusTabsContainer) statusTabsContainer.addEventListener('click', handleStatusTabClick);
            solicitudesTableHeaders.forEach(header => header.addEventListener('click', handleSortClick));
            if (applyDateFilterButton) applyDateFilterButton.addEventListener('click', handleDateFilterApply);
            if (clearDateFilterButton) clearDateFilterButton.addEventListener('click', handleDateFilterClear);
            if (globalSearchInput) globalSearchInput.addEventListener('input', handleGlobalSearch);
            if (dateFromInput) dateFromInput.addEventListener('change', toggleApplyDateFilterButton);
            if (dateToInput) dateToInput.addEventListener('change', toggleApplyDateFilterButton);

            // Modal-specific listeners
            if (closeSolicitudDetailModalButton) closeSolicitudDetailModalButton.addEventListener('click', closeSolicitudDetailModal);
            if (solicitudDetailModalTabsContainer) solicitudDetailModalTabsContainer.addEventListener('click', handleModalTabClick);
            if (detailGuardarComentarioButton) detailGuardarComentarioButton.addEventListener('click', handleSaveComment);
            if (detailComentariosMC) detailComentariosMC.addEventListener('input', updateCharCounterMC);
            if (detailAprobarButton) detailAprobarButton.addEventListener('click', handleApproveSolicitud);
            if (detailRechazarButton) detailRechazarButton.addEventListener('click', openRejectionModal);

            if (confirmRejectionButton) confirmRejectionButton.addEventListener('click', handleConfirmRejection);
            if (cancelRejectionButton) cancelRejectionButton.addEventListener('click', () => toggleModal(rejectionReasonModal, false));
            if (closeRejectionModalButton) closeRejectionModalButton.addEventListener('click', () => toggleModal(rejectionReasonModal, false));
            if (rejectionReasonText) rejectionReasonText.addEventListener('input', () => updateCharCounter(rejectionReasonText, rejectionCharCounter));

            if (guardarTasasButton) guardarTasasButton.addEventListener('click', handleSaveTasas);
            if (inputComisionTransaccion) {
                 inputComisionTransaccion.addEventListener('input', () => { if(guardarTasasButton) guardarTasasButton.disabled = false; });
                 inputComisionTransaccion.addEventListener('blur', (e) => {
                    const value = parseFloat(e.target.value);
                    if (!isNaN(value)) e.target.value = value.toFixed(2);
                 });
            }
            if (generarContratosButton) generarContratosButton.addEventListener('click', handleGenerateContracts);

            if (prevPageButton) prevPageButton.addEventListener('click', () => { if (currentPage > 1) { currentPage--; renderSolicitudesTable(); } });
            if (nextPageButton) nextPageButton.addEventListener('click', () => {
                const totalPages = Math.ceil(applyAllFilters(allSolicitudesData).length / ITEMS_PER_PAGE);
                if (currentPage < totalPages) { currentPage++; renderSolicitudesTable(); }
            });

            document.addEventListener('keydown', handleGlobalKeyDown);
        }

        function toggleModal(modalElement, forceOpen) {
            if (!modalElement) return;
            const isOpen = modalElement.classList.contains('open');
            if (forceOpen === true || (forceOpen !== false && !isOpen)) {
                modalElement.classList.remove('hidden');
                setTimeout(() => modalElement.classList.add('open'), 10); // Pequeño delay para la transición de opacidad
            } else if (forceOpen === false || (forceOpen !== true && isOpen)) {
                modalElement.classList.remove('open');
                setTimeout(() => modalElement.classList.add('hidden'), 300); // Esperar que termine la transición
            }
        }

        function toggleDropdown(dropdownElement, forceOpen) {
            if (!dropdownElement) return;
            const isOpen = dropdownElement.classList.contains('open');
             if (forceOpen === true || (forceOpen !== false && !isOpen)) {
                dropdownElement.classList.remove('hidden');
                dropdownElement.classList.add('open');
            } else if (forceOpen === false || (forceOpen !== true && isOpen)) {
                dropdownElement.classList.remove('open');
                dropdownElement.classList.add('hidden');
            }
        }

        function handleStatusTabClick(event) {
            const tabButton = event.target.closest('.status-tab-button');
            if (tabButton) {
                statusTabsContainer.querySelectorAll('.status-tab-button').forEach(btn => btn.classList.remove('active'));
                tabButton.classList.add('active');
                activeFilters.status = tabButton.dataset.statusFilter;
                currentPage = 1;
                renderSolicitudesTable();
            }
        }

        function handleSortClick(event) {
            const header = event.currentTarget;
            const sortKey = header.dataset.sortKey;
            if (!sortKey) return;
            if (currentSortKey === sortKey) {
                currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                currentSortKey = sortKey;
                currentSortDirection = 'asc';
            }
            renderSolicitudesTable();
        }

        function handleDateFilterApply() {
            if (applyDateFilterButton.disabled) return;
            activeFilters.dateFrom = dateFromInput.value;
            activeFilters.dateTo = dateToInput.value;
            clearDateFilterButton.classList.toggle('hidden', !(activeFilters.dateFrom && activeFilters.dateTo));
            currentPage = 1;
            renderSolicitudesTable();
        }

        function handleDateFilterClear() {
            dateFromInput.value = ''; dateToInput.value = '';
            activeFilters.dateFrom = null; activeFilters.dateTo = null;
            clearDateFilterButton.classList.add('hidden');
            applyDateFilterButton.disabled = true;
            currentPage = 1;
            renderSolicitudesTable();
        }

        function toggleApplyDateFilterButton() {
            if(applyDateFilterButton) applyDateFilterButton.disabled = !(dateFromInput.value && dateToInput.value);
        }

        function handleGlobalSearch(event) {
            activeFilters.globalSearch = event.target.value;
            currentPage = 1;
            renderSolicitudesTable();
        }

        function handleGlobalKeyDown(e) {
            if (e.key === 'Escape') {
                if (rejectionReasonModal && rejectionReasonModal.classList.contains('open')) toggleModal(rejectionReasonModal, false);
                else if (solicitudDetailModal && solicitudDetailModal.classList.contains('open')) closeSolicitudDetailModal();
                else if (helpModal && helpModal.classList.contains('open')) toggleModal(helpModal, false);
                else if (faqModal && faqModal.classList.contains('open')) toggleModal(faqModal, false);
            }
            if (e.key === '/' && !(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
                e.preventDefault();
                if(globalSearchInput) globalSearchInput.focus();
            }
            if (e.key === 'F1') { e.preventDefault(); if(helpButton) helpButton.click(); }
        }

        // MODAL SPECIFIC LOGIC
        function openSolicitudDetailModal(solicitudId, defaultTabId = 'detailTabResumen') {
            currentOpenSolicitudId = solicitudId;
            unsavedCommentExists = false;
            if(comentariosUnsavedIndicator) comentariosUnsavedIndicator.style.display = 'none';

            const solicitud = allSolicitudesData.find(s => s.id === solicitudId);
            if (!solicitud) return;

            tasasGuardadasParaSolicitudActual = solicitud.tasasGuardadas || false;
            contratosGeneradosParaSolicitudActual = solicitud.contratosGenerados || false;

            safeSetText('solicitudDetailModalTitle', `Detalle Solicitud: ${solicitud.id} - ${solicitud.nombre}`);
            if (copySolicitudIdIcon) {
                copySolicitudIdIcon.title = translations[currentLangReg].tooltip_copiar_id || "Copiar ID";
                copySolicitudIdIcon.onclick = () => { copyToClipboard(solicitud.id); showToast('id_copiado'); };
            }

            // Mostrar/ocultar tabs según estado
            solicitudDetailModalTabsContainer.querySelectorAll('.modal-tab-button').forEach(tab => {
                const statusSpecific = tab.dataset.statusSpecific;
                const isVisible = !statusSpecific || statusSpecific.split(',').includes(solicitud.estatusKey);
                tab.classList.toggle('visible', isVisible);
                tab.classList.toggle('hidden', !isVisible);
            });

            // Populate Resumen Tab
            safeSetText('modalDetailId', solicitud.id);
            safeSetText('modalDetailFechaSolicitud', solicitud.fecha);
            safeSetText('modalDetailNombreComercio', solicitud.nombre);
            safeSetText('modalDetailTipoPersona', solicitud.tipoPersona);

            // Populate new "Datos Complementarios"
            const rfcRegex = /^[A-Z&Ñ]{3,4}\d{6}[A-Z\d]{3}$/;
            const rfcSpan = gebi('modalDetailRFC');
            if (rfcSpan) {
                rfcSpan.textContent = solicitud.rfc || 'N/A';
                if (solicitud.rfc && rfcRegex.test(solicitud.rfc)) {
                    rfcSpan.className = 'value rfc-valid';
                } else {
                    rfcSpan.className = 'value rfc-invalid';
                }
            }
            safeSetText('modalDetailGiro', solicitud.giro);
            safeSetText('modalDetailAnoFundacion', solicitud.anoFundacion);
            safeSetText('modalDetailNumEmpleados', solicitud.numEmpleados);
            safeSetText('modalDetailVentasAnuales', solicitud.ventasAnuales);
            safeSetText('modalDetailTicketPromedio', solicitud.ticketPromedio);
            safeSetText('modalDetailVentasLinea', solicitud.ventasLinea);

            const plataformasFieldModal = gebi('modalDetailPlataformasField');
            if (plataformasFieldModal) {
                if (solicitud.ventasLinea === "Sí" && solicitud.plataformasOnline) {
                    safeSetText('modalDetailPlataformas', solicitud.plataformasOnline);
                    plataformasFieldModal.classList.remove('hidden');
                } else {
                    plataformasFieldModal.classList.add('hidden');
                }
            }

            safeSetText('modalDetailSucursalesFisicas', solicitud.sucursalesFisicas);
            const cantidadSucursalesFieldModal = gebi('modalDetailCantidadSucursalesField');
            if (cantidadSucursalesFieldModal) {
                if (solicitud.sucursalesFisicas === "Sí" && solicitud.cantidadSucursales > 0) {
                    safeSetText('modalDetailCantidadSucursales', solicitud.cantidadSucursales);
                    cantidadSucursalesFieldModal.classList.remove('hidden');
                } else {
                    cantidadSucursalesFieldModal.classList.add('hidden');
                }
            }

            ['modalDetailPaginaWeb', 'modalDetailRedSocial'].forEach(id => {
                const el = gebi(id);
                const parentField = gebi(id + 'Field'); // Assuming parent div has ID like 'modalDetailPaginaWebField'
                const url = id === 'modalDetailPaginaWeb' ? solicitud.paginaWeb : solicitud.redSocial;
                if (el && parentField) {
                    if (url) {
                        el.textContent = url;
                        el.href = url.startsWith('http') ? url : `https://${url}`;
                        parentField.classList.remove('hidden');
                    } else {
                        el.textContent = 'No proporcionado';
                        el.removeAttribute('href');
                        parentField.classList.add('hidden');
                    }
                }
            });

            safeSetText('modalDetailDiasEnProceso', solicitud.diasEnProceso);
            safeSetText('modalDetailDiasEnEtapa', solicitud.diasEnEtapa);

            const estadoBadgeInner = document.createElement('span');
            estadoBadgeInner.className = `status-badge ${solicitud.estatusKey}`;
            const estatusTextKeyModal = `status_${solicitud.estatusKey}`;
            estadoBadgeInner.textContent = translations[currentLangReg][estatusTextKeyModal] || solicitud.estatusDisplay;
            const estadoWrapper = gebi('modalDetailEstadoGeneral');
            if (estadoWrapper) {
                estadoWrapper.innerHTML = '';
                estadoWrapper.appendChild(estadoBadgeInner);
            }

            lastSavedComment = (solicitud.comentariosInternos && solicitud.comentariosInternos.length > 0) ? solicitud.comentariosInternos[solicitud.comentariosInternos.length -1].comentario : "";
            if(detailComentariosMC) detailComentariosMC.value = "";
            updateCharCounterMC();
            renderCommentHistory(solicitud.comentariosInternos || []);

            if(inputComisionTransaccion) inputComisionTransaccion.value = solicitud.tasas?.comisionTransaccion || '';
            if(inputComisionTransaccion) inputComisionTransaccion.disabled = !['enNegociacion'].includes(solicitud.estatusKey);
            if(guardarTasasButton) guardarTasasButton.disabled = true;

            if(generarContratosButton) generarContratosButton.textContent = (solicitud.contratosGenerados ? translations[currentLangReg].button_regenerar_contratos : translations[currentLangReg].button_generar_contratos) || "Generar Contratos";
            if(contratosLoadingMessage) contratosLoadingMessage.classList.add('hidden');
            if(contratosGeneradosListContainer) contratosGeneradosListContainer.classList.toggle('hidden', !solicitud.contratosGenerados);
            if (solicitud.contratosGenerados && contratosGeneradosListContainer) renderGeneratedContractsList(contratosGeneradosListContainer.querySelector('ul'));
            if(generarContratosButton) generarContratosButton.disabled = !tasasGuardadasParaSolicitudActual;

            updateActionButtonsState(solicitud);

            let tabToActivate = defaultTabId;
            const defaultTabButton = solicitudDetailModalTabsContainer.querySelector(`.modal-tab-button[data-tab="${defaultTabId}"]`);
            if (!(defaultTabButton && defaultTabButton.classList.contains('visible'))) {
                const firstVisibleTab = solicitudDetailModalTabsContainer.querySelector('.modal-tab-button.visible');
                tabToActivate = firstVisibleTab ? firstVisibleTab.dataset.tab : 'detailTabResumen';
            }
            switchModalTab(tabToActivate, 'solicitudDetailModal');
            toggleModal(solicitudDetailModal, true);
            const firstFocusable = solicitudDetailModal.querySelector('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (firstFocusable) firstFocusable.focus();
        }

        function closeSolicitudDetailModal() {
            if (unsavedCommentExists && detailComentariosMC && detailComentariosMC.value.trim() !== lastSavedComment) {
                if (!confirm(translations[currentLangReg].comentario_no_guardado_alerta || "Tiene comentarios sin guardar. ¿Desea cerrar?")) {
                    return;
                }
            }
            toggleModal(solicitudDetailModal, false);
            currentOpenSolicitudId = null;
            unsavedCommentExists = false;
            if(comentariosUnsavedIndicator) comentariosUnsavedIndicator.style.display = 'none';
        }

        function switchModalTab(tabId, modalId) {
            const currentModal = gebi(modalId);
            if (!currentModal) return;
            const tabContentSelector = modalId === 'solicitudDetailModal' ? '.detail-tab-content' : '.tab-content'; // Ejemplo si hay otros modales con tabs
            currentModal.querySelectorAll(tabContentSelector).forEach(content => content.classList.toggle('active', content.id === tabId));
            currentModal.querySelectorAll('.modal-tab-button').forEach(button => {
                if (button.classList.contains('visible')) { // Solo cambiar active en tabs visibles
                    button.classList.toggle('active', button.dataset.tab === tabId);
                }
            });
        }

        function handleModalTabClick(event) {
            const tabButton = event.target.closest('.modal-tab-button');
            if (tabButton && tabButton.classList.contains('visible')) {
                switchModalTab(tabButton.dataset.tab, 'solicitudDetailModal');
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
            if (!detailComentariosMC || !charCounterMC) return;
            updateCharCounter(detailComentariosMC, charCounterMC);
            unsavedCommentExists = detailComentariosMC.value.trim() !== "" && detailComentariosMC.value.trim() !== lastSavedComment;
            if(comentariosUnsavedIndicator) comentariosUnsavedIndicator.style.display = unsavedCommentExists ? 'block' : 'none';
            if(currentOpenSolicitudId){
                const solicitud = allSolicitudesData.find(s => s.id === currentOpenSolicitudId);
                if(solicitud) updateActionButtonsState(solicitud);
            }
        }

        function renderCommentHistory(comments) {
            if (!commentHistoryContainer) return;
            commentHistoryContainer.innerHTML = '';
            if (!comments || comments.length === 0) {
                const noCommentsItem = document.createElement('p');
                noCommentsItem.className = 'text-sm text-gray-500';
                noCommentsItem.textContent = 'No hay comentarios previos.';
                commentHistoryContainer.appendChild(noCommentsItem);
                return;
            }
            comments.forEach(comment => {
                const item = document.createElement('div');
                item.className = 'comment-history-item';
                item.innerHTML = `<span class="user">${comment.usuario}:</span> ${comment.comentario} <span class="date">(${new Date(comment.fecha).toLocaleString('es-MX', { dateStyle: 'short', timeStyle: 'short' })})</span>`;
                commentHistoryContainer.appendChild(item);
            });
        }

        function handleSaveComment() {
            if (currentOpenSolicitudId && detailComentariosMC) {
                const comentarioText = detailComentariosMC.value;
                if (comentarioText.trim() === "") {
                    showToast("alerta_comentario_vacio", "warning"); return;
                }
                const solicitud = allSolicitudesData.find(s => s.id === currentOpenSolicitudId);
                if (solicitud) {
                    if (!solicitud.comentariosInternos) solicitud.comentariosInternos = [];
                    solicitud.comentariosInternos.push({ usuario: "Alex Pérez", fecha: new Date().toISOString(), comentario: comentarioText.trim() });
                    lastSavedComment = comentarioText.trim();
                    unsavedCommentExists = false;
                    if(comentariosUnsavedIndicator) comentariosUnsavedIndicator.style.display = 'none';
                    detailComentariosMC.value = "";
                    updateCharCounterMC();
                    renderCommentHistory(solicitud.comentariosInternos);
                    updateActionButtonsState(solicitud);
                    showToast('comentario_guardado', 'success');
                }
            }
        }

        function updateActionButtonsState(solicitud) {
            if (!solicitud || !detailAprobarButton || !detailRechazarButton) return;
            let canApprove = false; let aprobarTextKey = "detail_action_aprobar_solicitud";
            let showAprobar = false; let showRechazar = false;

            switch (solicitud.estatusKey) {
                case 'nuevas': showAprobar = true; showRechazar = true; aprobarTextKey = "Aprobar y Negociar"; canApprove = true; break;
                case 'enNegociacion': showAprobar = true; showRechazar = true; aprobarTextKey = "Autorizar Comisión"; canApprove = tasasGuardadasParaSolicitudActual; break;
                case 'autorizadas': showAprobar = true; showRechazar = true; aprobarTextKey = "Enviar Contratos a Firma"; canApprove = contratosGeneradosParaSolicitudActual; break;
            }
            detailAprobarButton.textContent = translations[currentLangReg][aprobarTextKey] || aprobarTextKey.replace(/_/g, ' ');
            detailAprobarButton.disabled = !canApprove || unsavedCommentExists;
            detailRechazarButton.disabled = unsavedCommentExists;
            detailAprobarButton.classList.toggle('hidden', !showAprobar);
            detailRechazarButton.classList.toggle('hidden', !showRechazar);
        }

        function handleApproveSolicitud() {
            if (currentOpenSolicitudId && detailAprobarButton && !detailAprobarButton.disabled) {
                const solicitud = allSolicitudesData.find(s => s.id === currentOpenSolicitudId);
                if (solicitud) {
                    if (unsavedCommentExists && detailComentariosMC.value.trim() !== "") handleSaveComment(); // Guardar si hay comentario pendiente

                    let nextStatusKey = ''; let toastMsgKey = ''; let commentAction = '';
                    if (solicitud.estatusKey === 'nuevas') { nextStatusKey = 'enNegociacion'; toastMsgKey = "Solicitud {id} a Negociación."; commentAction = "Aprobada a negociación."; }
                    else if (solicitud.estatusKey === 'enNegociacion') { nextStatusKey = 'autorizadas'; toastMsgKey = "Comisión de {id} autorizada."; commentAction = "Comisión autorizada."; }
                    else if (solicitud.estatusKey === 'autorizadas') { nextStatusKey = 'pendienteFirma'; toastMsgKey = "Contratos de {id} enviados."; commentAction = "Contratos enviados."; }

                    if (nextStatusKey) {
                        solicitud.estatusKey = nextStatusKey;
                        solicitud.estatusDisplay = translations[currentLangReg][`status_${nextStatusKey}`] || nextStatusKey;
                        solicitud.diasEnEtapa = 0;
                        if (!solicitud.comentariosInternos) solicitud.comentariosInternos = [];
                        solicitud.comentariosInternos.push({ usuario: "Sistema", fecha: new Date().toISOString(), comentario: `ACCIÓN: ${commentAction}` });
                        showToast(toastMsgKey, 'success', {id: `<strong>${currentOpenSolicitudId}</strong>`});
                    }
                    closeSolicitudDetailModal();
                    renderSolicitudesTable();
                }
            }
        }

        function openRejectionModal() {
            if (currentOpenSolicitudId && detailRechazarButton && !detailRechazarButton.disabled) {
                if(rejectionReasonText) rejectionReasonText.value = '';
                if(rejectionReasonSelect) rejectionReasonSelect.value = '';
                updateCharCounter(rejectionReasonText, rejectionCharCounter);
                toggleModal(rejectionReasonModal, true);
                if(rejectionReasonSelect) rejectionReasonSelect.focus();
            }
        }

        function handleConfirmRejection() {
            const motivoSelect = rejectionReasonSelect.value;
            const motivoText = rejectionReasonText.value.trim();
            if (!motivoSelect) { showToast("alerta_motivo_vacio", 'warning'); return; }
            const motivoFinal = motivoSelect === 'Otro' ? motivoText : motivoSelect;
            if (!motivoFinal && motivoSelect === 'Otro') { showToast("Por favor, especifique el motivo.", 'warning'); return; }

            const solicitud = allSolicitudesData.find(s => s.id === currentOpenSolicitudId);
            if (solicitud) {
                if (unsavedCommentExists && detailComentariosMC.value.trim() !== "") handleSaveComment();

                solicitud.estatusKey = 'rechazadas';
                solicitud.estatusDisplay = translations[currentLangReg].status_rechazada;
                solicitud.motivoRechazo = motivoFinal;
                solicitud.diasEnEtapa = 0; // Reiniciar días en etapa
                 if (!solicitud.comentariosInternos) solicitud.comentariosInternos = [];
                solicitud.comentariosInternos.push({ usuario: "Sistema", fecha: new Date().toISOString(), comentario: `RECHAZO: ${motivoFinal}` });

                showToast("Solicitud {id} rechazada.", 'warning', {id: `<strong>${currentOpenSolicitudId}</strong>`});
                toggleModal(rejectionReasonModal, false);
                closeSolicitudDetailModal();
                renderSolicitudesTable();
            }
        }

        function handleSaveTasas() {
            if (currentOpenSolicitudId && inputComisionTransaccion) {
                const solicitud = allSolicitudesData.find(s => s.id === currentOpenSolicitudId);
                if (solicitud) {
                    solicitud.tasas = { comisionTransaccion: inputComisionTransaccion.value };
                    solicitud.tasasGuardadas = true;
                    tasasGuardadasParaSolicitudActual = true;
                    showToast('tasas_guardadas_exito', 'success');
                    updateActionButtonsState(solicitud);
                    if(guardarTasasButton) guardarTasasButton.disabled = true;
                }
            }
        }

        function handleGenerateContracts() {
             if (currentOpenSolicitudId && generarContratosButton && contratosLoadingMessage && contratosGeneradosListContainer) {
                const solicitud = allSolicitudesData.find(s => s.id === currentOpenSolicitudId);
                if (solicitud) {
                    generarContratosButton.classList.add('hidden');
                    contratosLoadingMessage.classList.remove('hidden');
                    contratosGeneradosListContainer.classList.add('hidden');
                    if(contratosGeneradosListContainer.querySelector('ul')) contratosGeneradosListContainer.querySelector('ul').innerHTML = '';

                    let progress = 20;
                    if(contratoProgressCounter) contratoProgressCounter.textContent = `${progress}%`;
                    const interval = setInterval(() => {
                        progress += Math.floor(Math.random() * 10) + 15;
                        if (progress >= 100) {
                            progress = 100; clearInterval(interval);
                            setTimeout(() => {
                                contratosLoadingMessage.classList.add('hidden');
                                if (contratosGeneradosListContainer.querySelector('ul')) renderGeneratedContractsList(contratosGeneradosListContainer.querySelector('ul'));
                                contratosGeneradosListContainer.classList.remove('hidden');
                                generarContratosButton.textContent = translations[currentLangReg].button_regenerar_contratos || "Re-generar";
                                generarContratosButton.classList.remove('hidden');
                                solicitud.contratosGenerados = true;
                                contratosGeneradosParaSolicitudActual = true;
                                showToast('contratos_generados_toast', 'success');
                                updateActionButtonsState(solicitud);
                            }, 300);
                        }
                       if(contratoProgressCounter) contratoProgressCounter.textContent = `${progress}%`;
                    }, 250);
                }
            }
        }
        function renderGeneratedContractsList(ulElement) {
            if(!ulElement) return;
            ulElement.innerHTML = '';
            const contratos = [ { key: 'contrato_general', nombre: 'Contrato General.pdf' }, /* ... más contratos */ ];
            contratos.forEach(c => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#`; a.textContent = translations[currentLangReg][c.key] || c.nombre;
                a.className = 'text-sky-600 hover:underline';
                a.onclick = (e) => {e.preventDefault(); alert(`Abrir ${c.nombre}`); };
                li.appendChild(a);
                ulElement.appendChild(li);
            });
        }

        // PAGINATION & UI UPDATES
        function updatePaginationControls(totalPages) {
            if (!paginationControls || !pageInfo) return;
            paginationControls.classList.toggle('hidden', totalPages <= 1);
            pageInfo.textContent = translations[currentLangReg].page_info_text
                .replace('{currentPage}', currentPage)
                .replace('{totalPages}', totalPages);
            if(prevPageButton) prevPageButton.disabled = currentPage === 1;
            if(nextPageButton) nextPageButton.disabled = currentPage === totalPages;
        }

        function updateSortIndicators() {
            solicitudesTableHeaders.forEach(header => {
                const indicatorIcon = header.querySelector('.sort-indicator i');
                if (indicatorIcon) {
                    indicatorIcon.className = 'fas fa-sort'; // Reset
                    if (header.dataset.sortKey === currentSortKey) {
                        indicatorIcon.classList.replace('fa-sort', currentSortDirection === 'asc' ? 'fa-sort-up' : 'fa-sort-down');
                    }
                }
            });
        }

        function updateTabCounters() {
            if(!statusTabsContainer) return;
            const counts = allSolicitudesData.reduce((acc, s) => {
                acc[s.estatusKey] = (acc[s.estatusKey] || 0) + 1;
                return acc;
            }, {});
            statusTabsContainer.querySelectorAll('.status-tab-button').forEach(tabButton => {
                const filterKey = tabButton.dataset.statusFilter;
                const countSpan = tabButton.querySelector('.status-tab-count');
                if (countSpan && filterKey !== 'todas') {
                    countSpan.textContent = counts[filterKey] > 0 ? `(${counts[filterKey]})` : '';
                }
            });
        }

        // INITIALIZATION
        document.addEventListener('DOMContentLoaded', () => {
            initializeDOMElements();
            setupEventListeners();
            translatePage(currentLangReg); // Aplicar idioma inicial

            showSkeletonRows(); // Mostrar skeleton al inicio
            fetchData().then(() => {
                renderSolicitudesTable(); // Renderizar tabla con datos iniciales
            }).catch(error => {
                console.error("Error fetching data:", error);
                if(noResultsMessage) noResultsMessage.textContent = "Error al cargar datos.";
                if(solicitudesTableBody) solicitudesTableBody.innerHTML = ''; // Limpiar skeleton
                noResultsMessage.classList.remove('hidden');
            });
            toggleApplyDateFilterButton(); // Estado inicial del botón de filtro de fecha
        });

        // Language Switcher (Ejemplo básico, podría estar en el header)
        function translatePage(lang) {
            currentLangReg = lang; // Actualizar idioma global
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.dataset.translate;
                let text = translations[lang]?.[key] || translations.es[key] || el.textContent; // Fallback a ES o texto actual

                // Para botones con contador, preservar el contador
                if (el.classList.contains('status-tab-button') && el.querySelector('.status-tab-count')) {
                    const countSpanHTML = el.querySelector('.status-tab-count').outerHTML;
                    el.innerHTML = text + (el.dataset.statusFilter !== 'todas' ? ` ${countSpanHTML}` : '');
                } else {
                    el.textContent = text;
                }
            });
            // Re-renderizar la tabla para que los estados se actualicen si es necesario
            // y para que los contadores de paginación también se traduzcan.
            if (allSolicitudesData.length > 0) { // Solo si ya hay datos
                 allSolicitudesData = allSolicitudesData.map(s => ({...s, estatusDisplay: translations[lang][`status_${s.estatusKey}`] || s.estatusKey }));
                 renderSolicitudesTable();
            }
        }
        // Ejemplo de cómo se podría llamar:
        // const langSwitcher = document.getElementById('langSwitcher'); // Suponiendo que existe un <select id="langSwitcher">
        // if(langSwitcher) langSwitcher.addEventListener('change', (e) => translatePage(e.target.value));
