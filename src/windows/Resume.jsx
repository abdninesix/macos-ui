import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import { Download } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <>
            <div id='window-header'>
                <WindowsControls target='resume' />
                <h2>Resume.pdf</h2>
                <a href="files/resume.pdf" download title='Download Resume'><Download className='icon' /></a>
            </div>

            <Document file="files/resume.pdf">
                <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
            </Document>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default ResumeWindow
