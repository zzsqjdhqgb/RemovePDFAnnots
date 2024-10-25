async function process(pdf_bytes) {
    const pdfDoc = await PDFLib.PDFDocument.load(pdf_bytes);
    const pages = pdfDoc.getPages();
    for (let page of pages) {
        if (!page.node.Annots()) continue;
        while (page.node.Annots().size()) {
            page.node.Annots().remove(0);
        }
    }
    return await pdfDoc.save();
}