import axios from 'axios';

const api = axios.create({
  baseURL: 'https://staging-dontwannalogin.fly.dev',
});

const base64BasicTokenAdmin = 'Basic YWRtaW46YWRtaW4=';

export async function getAnnotationList() {
  try {
    const annotationListResponse = await api.get('/annotations', {
      headers: { Authorization: base64BasicTokenAdmin },
    });

    if (annotationListResponse.status === 200) {
      return annotationListResponse.data;
    }
  } catch (e) {
    console.log(e);
  }
}

export async function createAnnotation(alias, data) {
  const body = { alias, data };

  const response = await api.post('/annotations', body, {
    headers: { Authorization: base64BasicTokenAdmin },
  });
}

export async function updateAnnotation(id, alias, data) {
  const body = { alias, data };

  const response = await api.patch(`/annotations/${id}`, body, {
    headers: { Authorization: base64BasicTokenAdmin },
  });
}

export async function deleteAnnotation(id) {
  try {
    const response = await api.delete(`/annotations/${id}`, {
      headers: { Authorization: base64BasicTokenAdmin },
    });

    return response.status;
  } catch (e) {
    console.log('[deleteAnnotation]:' + e);
  }
}
